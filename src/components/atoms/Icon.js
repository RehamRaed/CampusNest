"use client";
import React from "react";
import {
  House,
  Star,
  CheckCircle,
  Headset,
  CreditCard,
  Mail,
  Phone,
  Calendar,
  Users,
  Search,
  TriangleAlert,
  Ban,
  Sparkles,
  Key,
  MessageCircle,
  MapPin,
  Tag,
  Languages,
   Moon,
   X
} from "lucide-react";

export const Icons = {
 House,
  Star,
  CheckCircle,
  Headset,
  CreditCard,
  Mail,
  Phone,
  Calendar,
  Users,
  Search,
  TriangleAlert,
  Ban,
  Sparkles,
  Key,
  MessageCircle,
  MapPin,
  Tag,
  Languages,
  Moon,
  X
};

export default function Icon({
  name,
  className = "",
  size = 24,
  color = "currentColor",
  ...props
}) {
  const IconComponent = Icons[name];

  if (!IconComponent) return null;

  return (
    <IconComponent className={className} size={size} color={color} {...props} />
  );
}
