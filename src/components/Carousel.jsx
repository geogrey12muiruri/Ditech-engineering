import React, { useState, useEffect } from 'react';
import slideImage from '../assets/services/slide1.jpg';
import slideImage2 from '../assets/services/klt.jpg';
import slideImage3 from '../assets/services/mws.jpg';
import slideImage4 from '../assets/services/spe.jpg';
import slideImage5 from '../assets/services/nwmps.jpg';
import slideImage6 from '../assets/services/garowe.jpg';

const images = [
  {
    src: slideImage,
    alt: "Image 1",
    caption: "Chefe Sewerage Treatment Works Addis Ababa",
    description: "Design review, tender document preparation and construction supervision"
  },
  {
    src: slideImage2,
    alt: "Image 2",
    caption: "Kisumu long term action project",
    description: "Enhancement of water sanitation, and sewerage facilities in Kisumu City, to meet demands, as anticipated in the year 2030"
  },
  {
    src: slideImage3,
    alt: "Image 3",
    caption: "Mororgoro water supply project",
    description: "Electrical and mechanical engineers for design review of detailed design report, study for Morogoro water and Sewerage Project"
  },
  {
    src: slideImage4,
    alt: "Image 4",
    caption: "Sunrise Park Estate",
    description: "35000Ltrs per hour activated Alumna water Treatment Plant Installation"
  },
  {
    src: slideImage5,
    alt: "Image 5",
    caption: "Nairobi water Distribution Master Plan",
    description: "Description for Image 5"
  },
  {
    src: slideImage6,
    alt: "Image 6",
    caption: "Garowe Prison Putland State of Somalia",
    description: "Description for Image 6"
  }
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              className="block w-full h-full object-cover"
              alt={image.alt}
            />
            <div
              className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 text-center transition-transform duration-1000 ease-in-out ${
                index === currentSlide ? 'transform translate-y-0' : 'transform translate-y-full'
              } delay-1000`}
            >
              <h2 className="text-2xl font-bold">{image.caption}</h2>
              <p className="mt-2">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 9l4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
