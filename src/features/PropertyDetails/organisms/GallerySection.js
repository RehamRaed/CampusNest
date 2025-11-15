"use client";
import { useState } from "react";
import GalleryThumbnail from "../molecules/GalleryThumbnail";

export default function GallerySection({ images }) {
  const [mainImage, setMainImage] = useState(images?.[0]);

  return (
    <div className="space-y-4">
      <img
        src={mainImage}
        alt="main"
        className="w-full h-[250px] md:h-[470px] object-cover rounded-xl shadow-lg"
      />
      <div className="flex gap-3 overflow-x-auto py-3 px-1">
        {images?.map((img, idx) => (
          <GalleryThumbnail
            key={idx}
            img={img}
            isActive={mainImage === img}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
}
