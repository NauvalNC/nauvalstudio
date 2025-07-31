"use client";

import { banners } from "@/lib/utils";
import { useEffect, useState } from "react";

const Carousel = () => {
  const images = banners;
  const slideInterval = 4000;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, slideInterval);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (idx: number) => {
    setCurrent(idx);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-md">
      <div
        className="flex transition-transform duration-700"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${current * (100 / images.length)}%)`,
        }}
      >
        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            className="w-full object-cover flex-shrink-0"
            style={{ width: `${100 / images.length}%` }}
            alt={`Banner ${idx + 1}`}
          />
        ))}
      </div>
      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => handleDotClick(idx)}
            className={`hover:cursor-pointer block w-3 h-3 rounded-full transition-all focus:outline-none ${
              current === idx ? "bg-destructive" : "bg-destructive/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
