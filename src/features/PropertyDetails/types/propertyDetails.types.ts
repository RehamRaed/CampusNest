import { Landlord } from "@/types/property.types"; 
export interface GalleryThumbnailProps {
  img: string;
  isActive: boolean;
  onClick: () => void;
}

export interface PriceCardProps {
  id: number | string;
  price: string | number;
  availableFrom: string;
  availableTo: string;
  postedDate: string;
  guests: number;
  availableGuests: number;
}

export interface RatingBreakdownCardProps {
  label: string;
  value: number;
  icon: string;
}

export interface Review {
  user: string;
  comment: string;
  rating: number;
  date: string;
}

export interface ReviewCardProps {
  review: Review;
}

export interface AmenitiesModalProps {
  amenities: string[];
  onClose: () => void;
}

export interface AmenitiesSectionProps {
  amenities: string[];
}

export interface DescriptionSectionProps {
  description: string;
  landlord: Landlord;
}

export interface GallerySectionProps {
  images: string[];
}

export interface RatingBreakdown {
  cleanliness: number;
  accuracy: number;
  checkin: number;
  communication: number;
  location: number;
  value: number;
}

export interface ReviewsSectionProps {
  overallRating: number;
  ratingsBreakdown: RatingBreakdown;
  reviews: Review[];
}

export interface LandlordSectionProps {
  landlord: Landlord;
}