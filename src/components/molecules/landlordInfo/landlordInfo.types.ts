export interface LandlordInfoProps {
  landlord: {
    name: string;
    isLandlord: boolean;
    totalReviews: number;
    yearsHosting: number;
    description: string;
  };
}
