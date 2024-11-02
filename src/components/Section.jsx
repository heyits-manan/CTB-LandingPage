import Image from "next/image";
import Carousel from "../components/Carousel";

export default function Section({
  title,
  description,
  imageSrc,
  reverse,
  backgroundColor,
  customClasses = "",
  customImageClasses = "",
  images,
}) {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } items-center mb-4 ${backgroundColor} ${customClasses}`}
    >
      <div className="lg:w-1/2 m-10">
        <h2 className="text-3xl font-medium text-center mb-4 lg:text-left lg:text-6xl lg:mb-7">
          {title}
        </h2>
        <p className="text-lg font-thin text-center lg:text-left max-w-3xl">
          {description}
        </p>
      </div>
      <div className="lg:w-1/2 flex justify lg:justify-end items-center">
        {images ? (
          <Carousel
            images={images}
            customClasses={customClasses}
            customImageClasses={customImageClasses}
          />
        ) : (
          <Image
            src={imageSrc}
            alt={title}
            width={400}
            height={0}
            className={`lg:ml-10 ${customImageClasses}`}
          />
        )}
      </div>
    </div>
  );
}
