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
    src: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1723198275/dandoraestate_ddaext.jpg',
    alt: 'Dandora Estate Sewarage Treatment Plant',  
    caption: 'Dandora Estate Sewarage Treatment Plant',    
    description: 'Consultancy service for detailed design and construction, supervision for rehabilitation and expansion of Dandora Estate Sewarage Treatment Plant.',
    category: 'Real Estate',
    duration: '2021-2023',
  },
  {
    src: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1723198275/unguja_oxgase.jpg',
    alt: 'Uguja/Sega/Ukwala Water Supply and Sanitation Project',
    caption: 'Uguja/Sega/Ukwala Water Supply and Sanitation Project',   
    description: 'Electrical and Mechanical Engineers for design review of detailed design report, study, supervision and commisioning of Ugunja/Sega/Ukwala water supply and sanitation Project. Design for the Pump station  ',
    category: 'Real Estate',
    duration: '2021-2023',
  },
  {
    src: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1723387772/kituiwatersupply_dqgr4t.jpg',
    alt: 'Kitui Water Supply',
    caption: 'Kitui Water Supply',
    
    description: 'Design Review and and preparation of tender documentation , tender action and supervision for Kitui water and sewerage project',
    category: 'Healthcare',
    duration: '1993-1995',
  },
  {
    src: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1723387814/thikagithunguri_ol15da.jpg',
    alt: 'Thika Githunguri Water and sanitation project',
    caption: 'Thika Githunguri Water and sanitation project',
    
    description: 'Consulting services in electromechanical design, project overview report and design report and preparation of tender documents',
    category: 'Healthcare',
    duration: '1993-1995',
  },
  {
    src: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1723387815/sychelles_fgeobs.jpg',
    alt: 'Sychelles Water and Energy Assets Management Project',
    caption: 'Sychelles Water and Energy Assets Management Project' ,
    
    description:'Technical assistance for Sychelles Public utilities corporation.',
    category: 'Real Estate',
    duration: '2021-2023',
  },
  {
    src: slideImage5,
    alt: "Image 5",
    caption: "Nairobi water Distribution Master Plan",
    description: "The project involved performing diagnostics on all electro-mechanical equipment operated by Nairobi water and Sewarege Company"
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
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96 mt-20">
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
              className={`absolute inset-0 bg-gradient-to-t from-black/30 via-black/15 to-transparent flex flex-col justify-center items-center text-white p-4 text-center transition-transform mt-20 duration-1000 ease-in-out ${
                index === currentSlide ? 'transform translate-y-0' : 'transform translate-y-full'
              } delay-1000`}
            >
              <h2 className="text-md">{image.caption}</h2>
              <p className="mt-2 text-sm">{image.description}</p>
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
              index === currentSlide ? 'bg-orange-500' : 'bg-gray-400'
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
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-orange-500">
          <svg
            className="w-4 h-4 text-orange-500 rtl:rotate-180"
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
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-orange-500">
          <svg
            className="w-4 h-4 text-orange-500 rtl:rotate-180"
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
