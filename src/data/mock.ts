import { Stethoscope, Scissors, Pill, Wrench, Heart, Scale, Apple, Film, Coffee, Dumbbell } from "lucide-react";

export const categories = [
  { id: "veterinaria", name: "Veterinaria", icon: Stethoscope },
  { id: "peluqueria", name: "Peluquería", icon: Scissors },
  { id: "farmacia", name: "Farmacia", icon: Pill },
  { id: "mecanico", name: "Mecánico", icon: Wrench },
  { id: "odontologo", name: "Odontólogo", icon: Heart },
  { id: "abogado", name: "Abogado", icon: Scale },
  { id: "verduleria", name: "Verdulería", icon: Apple },
  { id: "cine", name: "Cine", icon: Film },
  { id: "cafeteria", name: "Cafetería", icon: Coffee },
  { id: "gimnasio", name: "Gimnasio", icon: Dumbbell },
];

export const businesses = [
  // Comercios de Buenos Aires (existentes)
  {
    id: "1",
    name: "Veterinaria Patitas",
    category: "Veterinaria",
    icon: Stethoscope,
    zone: "Palermo",
    city: "Buenos Aires",
    discount: "15% OFF",
    description: "Atención 24hs. Emergencias, vacunación y peluquería canina.",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=400&fit=crop",
    latitude: -34.5888,
    longitude: -58.4305
  },
  {
    id: "2",
    name: "Peluquería El Corte",
    category: "Peluquería",
    icon: Scissors,
    zone: "Villa Crespo",
    city: "Buenos Aires",
    discount: "20% OFF",
    description: "Cortes modernos, color y tratamientos capilares.",
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop",
    latitude: -34.5986,
    longitude: -58.4410
  },
  // Negocios de San Rafael y alrededores (ejemplos nuevos)
  {
    id: "7",
    name: "Farmacia del Centro",
    category: "Farmacia",
    icon: Pill,
    zone: "Centro",
    city: "San Rafael",
    discount: "10% OFF",
    description: "Abierto 24hs. Medicamentos y perfumería.",
    rating: 4.7,
    reviews: 84,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop",
    latitude: -34.6175,
    longitude: -68.3300 // Centro San Rafael
  },
  {
    id: "8",
    name: "Verdulería La Plaza",
    category: "Verdulería",
    icon: Apple,
    zone: "Centro",
    city: "San Rafael",
    discount: "15% OFF",
    description: "Frutas y verduras orgánicas de fincas locales.",
    rating: 4.5,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=600&h=400&fit=crop",
    latitude: -34.6130,
    longitude: -68.3250
  },
  {
    id: "9",
    name: "Cabañas Valle Verde",
    category: "Cabañas",
    icon: Dumbbell, // Fallback icon for now, since we need to import MapPin or something
    zone: "Valle Grande",
    city: "San Rafael",
    discount: "20% OFF",
    description: "Alojamiento con vista al Cañón del Atuel.",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=600&h=400&fit=crop",
    latitude: -34.8080,
    longitude: -68.5140 // Valle grande ~30km de distancia
  },
  {
    id: "10",
    name: "Hotel Los Reyunos",
    category: "Hoteles",
    icon: Dumbbell, 
    zone: "Los Reyunos",
    city: "San Rafael",
    discount: "15% OFF",
    description: "Vistas panorámicas a la represa. Pensión completa.",
    rating: 4.8,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    latitude: -34.5830,
    longitude: -68.6180 // Los reyunos ~30-40km
  },
  {
    id: "11",
    name: "Bodega del Sol",
    category: "Bodegas",
    icon: Dumbbell, 
    zone: "Las Paredes",
    city: "San Rafael",
    discount: "25% OFF",
    description: "Degustaciones guiadas y venta de vinos de autor.",
    rating: 4.9,
    reviews: 320,
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&h=400&fit=crop",
    latitude: -34.5900,
    longitude: -68.3800 // Las Paredes
  },
  {
    id: "12",
    name: "Club El Nihuil",
    category: "Turismo",
    icon: Dumbbell, 
    zone: "El Nihuil",
    city: "San Rafael",
    discount: "10% OFF",
    description: "Deportes acuáticos y actividades para toda la familia.",
    rating: 4.6,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1500661139414-04f7b243b7e7?w=600&h=400&fit=crop",
    latitude: -35.0330,
    longitude: -68.6830 // El Nihuil ~80km
  }
];

export const testimonials = [
  {
    id: "1",
    quote: "Desde que estoy en UnKe, el 30% de mis clientes nuevos vienen de la red.",
    author: "Martín",
    business: "Peluquería El Corte",
    avatar: "https://i.pravatar.cc/150?u=martin"
  },
  {
    id: "2",
    quote: "Nos ayudó a conectar con otros comercios de Recoleta y hacer compras en conjunto.",
    author: "Laura",
    business: "Clínica Dental Sonrisa",
    avatar: "https://i.pravatar.cc/150?u=laura"
  },
  {
    id: "3",
    quote: "Escanean el QR, ven el descuento y vuelven. Es simple y no pago comisiones abusivas.",
    author: "Carlos",
    business: "Taller Mecánico Rodríguez",
    avatar: "https://i.pravatar.cc/150?u=carlos"
  }
];
