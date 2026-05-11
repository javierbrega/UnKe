import { useState, useMemo } from "react";
import { useGeolocation } from "../hooks/useGeolocation";
import { getDistance } from "../lib/getDistance";
import { getRadiusForCategory } from "../config/searchRadius";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Navigation, Percent, MapPinned } from "lucide-react";
import { motion } from "motion/react";

interface Business {
  id: string;
  name: string;
  category: string;
  icon: any;
  zone: string;
  city: string;
  discount: string;
  description: string;
  rating: number;
  reviews: number;
  image: string;
  latitude: number;
  longitude: number;
}

interface NearbyBusinessesProps {
  businesses: Business[];
  selectedCategory?: string;
  searchQuery?: string;
}

// Cidades de ejemplo para selección manual
const CITIES = [
  { name: "San Rafael", lat: -34.6175, lng: -68.3300 },
  { name: "Buenos Aires", lat: -34.6037, lng: -58.3816 },
];

export function NearbyBusinesses({ businesses, selectedCategory, searchQuery }: NearbyBusinessesProps) {
  const { latitude, longitude, status, error, denied, requestGeolocation } = useGeolocation();
  const [selectedCity, setSelectedCity] = useState(CITIES[0].name);

  // Consideramos la ubicación de búsqueda activa
  const searchLat = latitude ?? CITIES.find((c) => c.name === selectedCity)?.lat ?? 0;
  const searchLng = longitude ?? CITIES.find((c) => c.name === selectedCity)?.lng ?? 0;

  // Calculamos la distancia de cada comercio y filtramos
  const filteredAndSortedBusinesses = useMemo(() => {
    const radius = getRadiusForCategory(selectedCategory);

    return businesses
      .map((business) => {
        const distance = getDistance(searchLat, searchLng, business.latitude, business.longitude);
        return { ...business, distance };
      })
      .filter((b) => {
        const matchesCategory = !selectedCategory || selectedCategory === "Todos" || b.category === selectedCategory;
        const matchesSearch = !searchQuery || b.name.toLowerCase().includes(searchQuery.toLowerCase()) || b.category.toLowerCase().includes(searchQuery.toLowerCase());
        return b.distance <= radius && matchesCategory && matchesSearch;
      })
      .sort((a, b) => a.distance - b.distance);
  }, [businesses, selectedCategory, searchQuery, searchLat, searchLng]);

  return (
    <div className="w-full">
      {/* Header & Controls */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-1">
            Buscando a {getRadiusForCategory(selectedCategory)} km a la redonda
          </h3>
          <p className="text-neutral-400 text-sm">
            Según el rubro seleccionado, el radio de búsqueda se ajusta automáticamente.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {status === "idle" || status === "denied" || status === "error" ? (
            <div className="flex gap-2 w-full sm:w-auto">
              {/* Selector manual */}
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="w-full sm:w-[160px] bg-neutral-900 border-neutral-800 text-white h-10">
                  <div className="flex items-center gap-2">
                    <MapPinned className="h-4 w-4 text-[#C8FF00]" />
                    <SelectValue placeholder="Ciudad" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-neutral-900 border-neutral-800 text-white">
                  {CITIES.map((city) => (
                    <SelectItem key={city.name} value={city.name} className="hover:bg-neutral-800">
                      {city.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Botón mi ubicación */}
              <Button 
                onClick={requestGeolocation}
                variant="outline"
                className="border-neutral-800 text-white hover:bg-neutral-800 h-10 px-3"
                title="Usar mi ubicación"
              >
                <Navigation className="h-4 w-4" />
              </Button>
            </div>
          ) : status === "loading" ? (
            <div className="flex items-center gap-2 text-neutral-400 text-sm bg-neutral-900 px-4 py-2 rounded-lg border border-neutral-800">
              <div className="h-4 w-4 rounded-full border-2 border-t-[#C8FF00] border-r-[#C8FF00] border-b-transparent border-l-transparent animate-spin" />
              Obteniendo ubicación...
            </div>
          ) : (
            <div className="flex items-center gap-2 text-sm bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-lg text-[#C8FF00]">
              <MapPin className="h-4 w-4" />
              Usando tu ubicación actual
            </div>
          )}
        </div>
      </div>

      {/* Error / Denied Message */}
      {(denied || error) && status !== 'loading' && (
        <div className="mb-6 p-4 rounded-xl bg-neutral-900 border border-neutral-800">
          <p className="text-sm text-neutral-300">
            {denied 
              ? "Para ver comercios cercanos, permití el acceso a tu ubicación en el navegador." 
              : "No pudimos obtener tu ubicación actual."}
            {" "}Usando <strong className="text-white">{selectedCity}</strong> como referencia.
          </p>
        </div>
      )}

      {/* Grid de resultados */}
      {filteredAndSortedBusinesses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedBusinesses.map((business, i) => (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="bg-neutral-900 border-neutral-800 h-full flex flex-col group overflow-hidden border transition-all hover:border-[#C8FF00]/30 hover:shadow-[0_0_20px_rgba(200,255,0,0.05)]">
                {/* Imagen */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={business.image}
                    alt={business.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-[#C8FF00] text-black font-bold border-none">
                      <Percent className="w-3 h-3 mr-1" />
                      {business.discount}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 z-20">
                    <Badge variant="secondary" className="bg-black/80 text-white backdrop-blur border-none flex items-center gap-1.5">
                      <Navigation className="w-3 h-3 text-[#C8FF00]" />
                      {business.distance < 1 ? '< 1 km' : `${Math.round(business.distance)} km`}
                    </Badge>
                  </div>
                </div>

                {/* Contenido */}
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-[#C8FF00]">
                      <business.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight group-hover:text-[#C8FF00] transition-colors">{business.name}</h3>
                      <p className="text-neutral-400 text-sm flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {business.zone}, {business.city}
                      </p>
                    </div>
                  </div>
                  <p className="text-neutral-300 text-sm mb-6 flex-1 line-clamp-2">
                    {business.description}
                  </p>
                  <Button variant="outline" className="w-full rounded-xl border-neutral-700 text-white hover:bg-[#C8FF00] hover:text-black hover:border-[#C8FF00] transition-colors h-12">
                    Ver beneficios
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 rounded-2xl bg-neutral-900 border border-neutral-800">
          <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-neutral-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No encontramos negocios cerca</h3>
          <p className="text-neutral-400 max-w-md mx-auto">
            Probá ajustando el filtro de rubro o tu ubicación, ya que el radio de búsqueda varía según la categoría.
          </p>
        </div>
      )}
    </div>
  );
}
