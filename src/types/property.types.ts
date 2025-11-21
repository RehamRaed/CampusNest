export interface RatingBreakdown {
  cleanliness: number;
  accuracy: number;
  checkin: number;
  communication: number;
  location: number;
  value: number;
}

export interface Review {
  user: string;
  comment: string;
  rating: number;
  date: string;
}

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

export interface Landlord {
  id: number;
  name: string;
  image: string;
  isLandlord: boolean;
  isVerified: boolean;
  totalReviews: number;
  overallRating: number;
  yearsHosting: number;
  languges: string;
  livesIn: string;
  description: string;
  responseRate: string;
  responseTime: string;
  testimonials: LandlordTestimonial[];
  propertiesList: LandlordProperty[];
}

export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  overallRating: number;
  type: string;
  agentName: string;
  image: string;
  images: string[];
  description: string;
  amenities: string[];
  availableFrom: string;
  availableTo: string;
  postedDate: string;
  guests: number;
  availableGuests: number;
  tags: string[];
  ratingsBreakdown: RatingBreakdown;
  reservation: { id: number };
  landlord: Landlord;
  reviews: Review[];
}
