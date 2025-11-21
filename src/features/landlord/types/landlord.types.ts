import { Landlord } from "@/types/property.types"
export interface LandlordTestimonial {
  id: number;
  guestName: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface LandlordProperty {
  id: number;
  title: string;
  type: string;
  avatar: string;
  rating: number;
  reviews: number;
}

export interface LandlordProps {
  landlord: Landlord;
}