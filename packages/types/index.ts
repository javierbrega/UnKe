export interface User {
  id: string;
  email: string;
  role: 'admin' | 'merchant' | 'closer';
  fullName: string;
  avatarUrl?: string;
  createdAt: Date;
}

export type BusinessCategory = 
  | 'veterinaria' | 'peluqueria' | 'farmacia' | 'mecanico' 
  | 'odontologo' | 'abogado' | 'contador' | 'arquitecto'
  | 'verduleria' | 'cafeteria' | 'restaurante' | 'gimnasio'
  | 'cabañas' | 'turismo' | 'plomero' | 'electricista'
  | 'ecommerce' | 'otro';

export interface Business {
  id: string;
  ownerId: string; // FK a User
  name: string;
  category: BusinessCategory;
  description: string;
  address: string;
  city: string;
  latitude: number;
  longitude: number;
  phone: string;
  micrositeType: 'profesional' | 'oficio' | 'comercio' | 'gastronomia' | 'ecommerce' | 'turismo';
  micrositeData: Record<string, any>; // JSONB
  discount: number; // porcentaje de descuento para la red
  rating: number;
  reviewCount: number;
  status: 'active' | 'inactive' | 'at_risk';
  assignedCloserId?: string; // FK a User (closer)
  createdAt: Date;
  updatedAt: Date;
}

export interface Coupon {
  id: string;
  businessId: string;
  userId: string;
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  status: 'active' | 'used' | 'expired';
  maxUses: number;
  currentUses: number;
  expiresAt: Date;
  createdAt: Date;
}

export interface Lead {
  id: string;
  businessName: string;
  category: BusinessCategory;
  contactName: string;
  phone: string;
  email: string;
  status: 'new' | 'contacted' | 'converted' | 'lost';
  assignedCloserId?: string;
  createdAt: Date;
}

export interface Subscription {
  id: string;
  businessId: string;
  plan: 'semilla' | 'activo' | 'vitrina';
  price: number;
  closerCommission: number; // 30% del precio
  closerId: string;
  status: 'active' | 'cancelled' | 'past_due';
  startedAt: Date;
  cancelledAt?: Date;
}
