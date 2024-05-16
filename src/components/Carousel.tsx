import { useState } from "react";
import ArrowBack from "../assets/icons/arrow_back.svg";
import ArrowForward from "../assets/icons/arrow_forward.svg";
import Star from "../assets/icons/star.svg";

export default function Carousel({
  slides,
}: {
  slides: { src: string; text: string; name: string; country: string }[];
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function prevSlide() {
    setCurrentSlide((s) => (s === 0 ? slides.length - 1 : s - 1));
  }

  function nextSlide() {
    setCurrentSlide((s) => (s === slides.length - 1 ? 0 : s + 1));
  }

  return (
    <div className="relative h-[400px] max-w-[400px] overflow-hidden rounded-2xl">
      <div
        className="flex transition duration-300 ease-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map(
          (
            slide: { src: string; text: string; name: string; country: string },
            index,
          ) => (
            <div
              key={index}
              className="relative flex h-full min-h-fit w-full flex-shrink-0"
            >
              <img
                src={slide.src}
                alt={`Slideshow image ${index}`}
                className="min-h-[400px] object-cover"
              />
              <div className="absolute left-0 top-44 flex h-96 w-full flex-col gap-2 bg-gray-800/[0.6] p-4 text-white lg:gap-4">
                <p>{slide.text}</p>
                <div className="flex justify-between">
                  <h1 className="text-xl font-semibold">{slide.name}</h1>
                  <div className="hidden lg:flex">
                    <img src={Star} alt="Star image" className="h-5 w-5" />
                    <img src={Star} alt="Star image" className="h-5 w-5" />
                    <img src={Star} alt="Star image" className="h-5 w-5" />
                    <img src={Star} alt="Star image" className="h-5 w-5" />
                    <img src={Star} alt="Star image" className="h-5 w-5" />
                  </div>
                </div>
                <h2>{slide.country}</h2>
              </div>
            </div>
          ),
        )}
      </div>
      <img
        src={ArrowBack}
        alt="Back Image"
        onClick={prevSlide}
        className="b absolute bottom-5 right-16 h-7 w-7 rounded-full border p-1 hover:cursor-pointer"
      />
      <img
        src={ArrowForward}
        alt="Forward Image"
        onClick={nextSlide}
        className="b absolute bottom-5 right-5 h-7 w-7 rounded-full border p-1 hover:cursor-pointer"
      />
    </div>
  );
}
