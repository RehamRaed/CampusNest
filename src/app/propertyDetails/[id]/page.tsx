"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import properties from "../../../../data/exploreData";
import PropertyDetailsTemplate from "@/features/PropertyDetails/templates/PropertyDetailsTemplate";

export default function PropertyDetailsPage() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const selected = properties.find((p) => p.id === Number(id));
    setProperty(selected);
  }, [id]);

  if (!property) return <p>Loading...</p>;

  return <PropertyDetailsTemplate property={property} />;
}
