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
    src: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1723387770/jubawatersupply_tzqvzi.jpg',
    alt: 'Water supply system in Juba city',
    caption: 'Water supply system in Juba city',
    
    description: 'consulting services in electro mechanical design for recirculation pumping system and pipeline design calculations ',
    category: 'Healthcare',
    duration: '1993-1995',
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
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <div className="relative flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-64 md:h-96 flex-shrink-0 relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover opacity-100"
              loading="lazy" // Preload images
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h2 className="text-lg md:text-xl">{image.caption}</h2>
              <p className="mt-2 text-sm md:text-base">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-orange-500' : 'bg-gray-400'}`}
          />
        ))}
      </div>

      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-white/70 rounded-full shadow-lg hover:bg-white/90"
      >
        <svg className="w-4 h-4 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-white/70 rounded-full shadow-lg hover:bg-white/90"
      >
        <svg className="w-4 h-4 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;