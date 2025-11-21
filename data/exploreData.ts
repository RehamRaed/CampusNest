import { Property } from "@/types/property.types";

export const locations: string[] = [
  "Cairo",
  "Giza",
  "Nasr City",
  "6 October",
  "Alexandria",
  "Mansoura",
  "Tanta",
  "Aswan",
  "Hurghada",
  "Luxor",
];

export const housingTypes: string[] = [
  "Shared Room",
  "Private Room",
  "Entire Apartment",
];

export const amenities: string[] = [
  "Wi-Fi",
  "Air Conditioning",
  "Kitchen",
  "Laundry",
  "Balcony",
  "TV",
  "Parking",
];

export const ratings: { label: string; value: number }[] = [
  { label: "4★ & above", value: 4 },
  { label: "3★ & above", value: 3 },
];


const properties: Property[] = Array.from({ length: 60 }, (_, index) => ({
  id: index + 1,
  title: "Modern Apartment",
  location: "Al Naser city, Cairo",
  price: "2500",
  overallRating: 4.81,
  type: "Furnished Apartment",
  agentName: "Mohammed",
  image: "../images/apart1.jpg",
  images: [
    "../images/apart1.jpg",
    "../images/apart2.jpg",
    "../images/apart3.jpg",
    "../images/apart4.jpg",
    "../images/apart5.jpg",
  ],
  description:
    "A fully furnished, spacious apartment located just minutes from the university...",
  amenities: [
    "2 Bathroom",
    "Kitchen equipped",
    "Wi-Fi included",
    "Refrigerator",
    "Shared balcony",
    "Washer",
    "Dining table",
    "Dishes and silverware",
  ],
  availableFrom: "2025-11-01",
  availableTo: "2025-12-31",
  postedDate: "2025-10-01",
  guests: 5,
  availableGuests: 2,
  tags: ["Furnished", "Near campus", "Wi-Fi included"],
  ratingsBreakdown: {
    cleanliness: 4.8,
    accuracy: 4.8,
    checkin: 4.9,
    communication: 4.8,
    location: 4.7,
    value: 4.8,
  },
  reservation: { id: index + 1 },
  landlord: {
    id: index + 1,
    name: "Mohammed",
    image: "../../images/landlord.jpg",
    isLandlord: true,
    isVerified: true,
    totalReviews: 237,
    overallRating: 4.81,
    yearsHosting: 3,
    languges: "English , Arabic",
    livesIn: "Lives in Alexandria , Cairo",
    description:
      "Mohammed Al-Sayed is a dedicated landlord — experienced, trusted, and committed...",
    responseRate: "100%",
    responseTime: "Responds within an hour",
    testimonials: [
      {
        id: 1,
        guestName: "Sara",
        avatar: "https://i.pravatar.cc/50?img=32",
        rating: 5,
        date: "September 2025",
        comment: "Staying at Mohammed's apartment was an absolute delight...",
      },
      {
        id: 2,
        guestName: "Ali",
        avatar: "https://i.pravatar.cc/50?img=12",
        rating: 4,
        date: "September 2025",
        comment:
          "Our experience with Mohammed as a landlord was fantastic...",
      },
      {
        id: 3,
        guestName: "Lina",
        avatar: "https://i.pravatar.cc/50?img=48",
        rating: 5,
        date: "September 2025",
        comment:
          "I loved my stay at Mohammed's property! The apartment felt very welcoming...",
      },
    ],
    propertiesList: [
      {
        id: 1,
        title: "Cozy single room in the city center",
        type: "Private Room",
        avatar: "../images/apart1.jpg",
        rating: 4.92,
        reviews: 50,
      },
      {
        id: 2,
        title: "Small apartment with one bedroom",
        avatar: "../images/apart1.jpg",
        type: "Private apartment",
        rating: 4.85,
        reviews: 69,
      },
    ],
  },
  reviews: [
    {
      user: "John Doe",
      comment: "Great, very comfortable and close to everything!",
      rating: 4.2,
      date: "2025-09-20",
    },
    {
      user: "John Doe",
      comment: "Great, very comfortable and close to everything!",
      rating: 4.2,
      date: "2025-09-20",
    },
    {
      user: "John Doe",
      comment: "Great, very comfortable and close to everything!",
      rating: 4.2,
      date: "2025-09-20",
    }
  ],
}));

export default properties;
