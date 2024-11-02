"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Carousel({
  images,
  customClasses = "",
  customImageClasses = "",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false); // Track fade state

  const nextSlide = () => {
    setIsFading(true); // Start fade-out
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsFading(false); // Remove fade-out after update
    }, 500); // Delay transition by the fade duration (500ms here)
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={` flex items-center justify-center ${customClasses}`}>
      <Image
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        width={700}
        height={0}
        className={`transition-opacity duration-500 ease-in-out ${
          isFading ? "opacity-0" : "opacity-100"
        } ${customImageClasses}`}
      />
    </div>
  );
}
