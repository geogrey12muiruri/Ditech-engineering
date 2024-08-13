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
  },
  {
    src: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1723198275/unguja_oxgase.jpg',
    alt: 'Uguja/Sega/Ukwala Water Supply and Sanitation Project',
    caption: 'Uguja/Sega/Ukwala Water Supply and Sanitation Project',   
    description: 'Electrical and Mechanical Engineers for design review of detailed design report, study, supervision and commissioning of Ugunja/Sega/Ukwala water supply and sanitation Project. Design for the Pump station',
  },
  {
    src: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1723387770/jubawatersupply_tzqvzi.jpg',
    alt: 'Water supply system in Juba city',
    caption: 'Water supply system in Juba city',
    description: 'Consulting services in electro mechanical design for recirculation pumping system and pipeline design calculations',
  },
  {
    src: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1723387772/kituiwatersupply_dqgr4t.jpg',
    alt: 'Kitui Water Supply',
    caption: 'Kitui Water Supply',
    description: 'Design Review and preparation of tender documentation, tender action and supervision for Kitui water and sewerage project',
  },
  {
    src: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1723387814/thikagithunguri_ol15da.jpg',
    alt: 'Thika Githunguri Water and sanitation project',
    caption: 'Thika Githunguri Water and sanitation project',
    description: 'Consulting services in electromechanical design, project overview report and design report and preparation of tender documents',
  },
  {
    src: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1723387815/sychelles_fgeobs.jpg',
    alt: 'Sychelles Water and Energy Assets Management Project',
    caption: 'Sychelles Water and Energy Assets Management Project',
    description: 'Technical assistance for Sychelles Public utilities corporation.',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="max-w-2xl mx-auto relative">
      <div className="relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96 overflow-hidden">
        {/* Carousel items */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
              <h3 className="text-xl font-semibold">{image.caption}</h3>
              <p className="mt-2">{image.description}</p>
            </div>
          </div>
        ))}
        {/* Previous and Next buttons */}
        <button
          type="button"
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
          onClick={handlePrevious}
        >
          &#9664;
        </button>
        <button
          type="button"
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
          onClick={handleNext}
        >
          &#9654;
        </button>
        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
