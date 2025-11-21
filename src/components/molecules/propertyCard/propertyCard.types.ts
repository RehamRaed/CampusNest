export interface Property {
id: number; 
title: string;
price: number;
location: string;
overallRating: number;
type: string;
image: string;
description: string;
amenities: string[];
}

export interface PropertyCardProps {
property: Property; 
}
