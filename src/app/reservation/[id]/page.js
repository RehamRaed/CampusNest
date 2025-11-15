"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import properties from "../../../../data/exploreData";
import ReservationTemplate from "@/features/reservation/templates/ReservationTemplate";

export default function ReservationPage() {
    const { id } = useParams();
    const searchParams = useSearchParams();
    const selectedGuests = Number(searchParams.get("guests")); 

    const [selectedProperty, setSelectedProperty] = useState(null);

    useEffect(() => {
        const found = properties.find(
            (p) => p.reservation.id === Number(id)
        );

        if (found) {
            setSelectedProperty(found);
        }
    }, [id]);

    if (!selectedProperty) return <p>Loading...</p>;

    return (
        <ReservationTemplate 
            propertyDetails={selectedProperty}
            selectedGuests={selectedGuests}   
        />
    );
}
