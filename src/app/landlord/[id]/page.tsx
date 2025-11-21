"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import properties from "../../../../data/exploreData";
import LandlordTemplate from "@/features/landlord/templates/LandlordTemplate";

export default function LandlordPage() {
  const { id } = useParams();
  const [landlord, setLandlord] = useState(null);

  useEffect(() => {
    const selectedProperty = properties.find(
      (p) => p.landlord.id === Number(id)
    );

    if (selectedProperty) {
      setLandlord(selectedProperty.landlord);
    }
  }, [id]);

  if (!landlord) return <p>Loading...</p>;
  console.log("LANDLORD PAGE DATA:", landlord);


  return <LandlordTemplate landlord={landlord} />;
}
