"use client";
import React from "react";
import * as LucideIcons from "lucide-react";
import { IconProps } from "./icon.types";

export const Icons = {
  House: LucideIcons.House,
  Star: LucideIcons.Star,
  CheckCircle: LucideIcons.CheckCircle,
  Headset: LucideIcons.Headset,
  CreditCard: LucideIcons.CreditCard,
  Mail: LucideIcons.Mail,
  Phone: LucideIcons.Phone,
  Calendar: LucideIcons.Calendar,
  Users: LucideIcons.Users,
  Search: LucideIcons.Search,
  TriangleAlert: LucideIcons.TriangleAlert,
  Ban: LucideIcons.Ban,
  Sparkles: LucideIcons.Sparkles,
  Key: LucideIcons.Key,
  MessageCircle: LucideIcons.MessageCircle,
  MapPin: LucideIcons.MapPin,
  Tag: LucideIcons.Tag,
  Languages: LucideIcons.Languages,
  Moon: LucideIcons.Moon,
  X: LucideIcons.X,
  ArrowLeft: LucideIcons.ArrowLeft,
  DollarSign: LucideIcons.DollarSign,
  ChevronDown: LucideIcons.ChevronDown,
};
export default function Icon({
  name,
  className = "",
  size = 24,
  color = "currentColor",
  ...props
}: IconProps) {
  const Icon = Icons[name];
  if (!Icon) return null;
  return (
    <Icon className={className} size={size} color={color} {...props} />
  );
}
