import React, { useState } from 'react';
import Button from "./Button";
import project1Image from '../assets/services/county.jpeg';
import project2Image from '../assets/services/sikita.jpg';
import project3Image from '../assets/services/knhpcare.jpg';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const projects = [
  {
    image: project1Image,
    title: 'Proposed construction of Kitui County Headquarters',
    description: 'Preparation of Designs, Supervision and Commissioning of Construction of Kitui County Assembly & Offices plumbing, drainage, Firefighting Facilities and air conditioning with a total built up area of 4,500 SM.',
  },
  {
    image: project2Image,
    title: 'Simasona Towers and Villas Juba Sudan',
    description: 'Review and electromechanical redesign and bill of quantities preparation of 7 floor office building and 2 no 12-bedroom villas for Mr. John Simasona in Juba South Sudan. These were already constructed and required professional input to make them in line with current international building standards. The commissioning is to be CIBSE standards to enable building to attract choosy international clientele.',
  },
  {
    image: project3Image,
    title: 'Rehabilitation of Kenyatta National Hospital Prime Care Center, 9th and 10th Floor',
    description: 'Electrical and Mechanical Engineers in charge of design, tender documents preparation, supervision and commissioning for rehabilitation of 9th and 10th floor Prime care centre Kenyatta National Hospital. Our role was in plumbing, drainage, fire prevention, suppression and fighting, electrical, telecommunication of the two floors',
  }
];

const FeaturedProjects = () => {
  const [visibleDescription, setVisibleDescription] = useState(Array(projects.length).fill(false));

  const toggleDescriptionVisibility = (index) => {
    const newVisibility = [...visibleDescription];
    newVisibility[index] = !newVisibility[index];
    setVisibleDescription(newVisibility);
  };

  return (
    <div className="bg-black">
      <section id="featured" className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30">
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Featured Projects
          </span>
          <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Our Remarkable Projects
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
            Explore some of the most notable projects we have worked on. Each project highlights our commitment to quality and excellence.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="rounded-md border border-neutral-800 bg-neutral-900/50 text-center shadow">
              <div className="relative">
                <img src={project.image} alt={`Project ${index + 1}`} className="w-full h-50 object-cover mb-4 rounded-t-md" />
                <div className="absolute bottom-0 w-full p-4 bg-black bg-opacity-50">
                  <h3 className="text-white">{project.title}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                  {visibleDescription[index] ? project.description : `${project.description.substring(0, 100)}...`}
                  <button
                    onClick={() => toggleDescriptionVisibility(index)}
                    className="text-blue-500 ml-2 focus:outline-none"
                  >
                    {visibleDescription[index] ? 'View Less' : 'View More'}
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
        <Button href="/projects" white>
         View More
    </Button>
     
        </div>

        <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b" style={{ backgroundImage: 'linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)', borderColor: 'rgba(92, 79, 240, 0.2)' }}></div>
        <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full" style={{ backgroundImage: 'linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)', borderColor: 'rgba(92, 79, 240, 0.2)' }}></div>
      </section>
    </div>
  );
};

export default FeaturedProjects;
