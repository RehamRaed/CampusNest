export interface LandlordSummaryProps {
  landlord: {
    id: string | number;
    image: string;
    name: string;
    isVerified: boolean;
    livesIn: string;
  };
}
