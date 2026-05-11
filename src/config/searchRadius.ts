export const DEFAULT_RADIUS = 20;

export const CATEGORY_RADIUS_MAP: Record<string, number> = {
  // 5 km
  "Verdulería": 5,
  "Farmacia": 5,
  "Kiosco": 5,
  "Almacén": 5,
  
  // 15 km
  "Peluquería": 15,
  "Mecánico": 15,
  "Veterinaria": 15,
  "Gimnasio": 15,
  "Cafetería": 15,

  // 30 km
  "Odontólogo": 30,
  "Abogado": 30,
  "Contador": 30,
  "Arquitecto": 30,

  // 100 km
  "Cabañas": 100,
  "Hoteles": 100,
  "Cabañas turísticas": 100,
  "Turismo": 100,
  "Bodegas": 100,
};

export function getRadiusForCategory(category?: string | null): number {
  if (!category || category === "Todos") return DEFAULT_RADIUS;
  return CATEGORY_RADIUS_MAP[category] || DEFAULT_RADIUS;
}
