import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from './Carousel';
import Location from './Location';
import Button from './Button';

const projectsData = [
  {
    id: 1,
    title: 'Victoria Gardens Estate',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835393/Victoria_Gardens_Kisumu_wegniv.jpg',
    description: 'A residential estate in Kisumu, consisting of 91 units comprising 4, 3, and 2-bedroom maisonettes.',
    category: 'Real Estate',
    duration: '2021-2023',
  },
  {
    id: 2,
    title: 'Proposed Mini Apartments',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835364/Mimi_Apartments_q3ft7g.jpg',
    description: 'Design of electro-mechanical works for a block of apartments with 23 units behind Nakumatt Nyali, Mombasa.',
    category: 'Real Estate',
    duration: '2020-2022',
  },
  {
    id: 3,
    title: 'Best Western Hotel',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835352/Best_Western_Hotel_imdsdn.jpg',
    description: 'Design and construction of the Best Western Hotel.',
    category: 'Hospitality',
    duration: '2018-2020',
  },
  {
    id: 4,
    title: 'Simasona Towers, Juba',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835380/Simasona_Towers_Juba_qjiine.jpg',
    description: 'Construction of a high-rise tower in Juba.',
    category: 'Construction',
    duration: '2017-2019',
  },
  {
    id: 5,
    title: 'Sakita Apartments',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835378/Sikita_Apartments_2_zz5wx4.jpg',
    description: 'Design and tender documentation for a 4-unit apartment block in Bungoma.',
    category: 'Real Estate',
    duration: '2016-2018',
  },
  {
    id: 6,
    title: 'Puntland Prison',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835372/Putland_Prison_haqu8d.jpg',
    description: 'Construction and infrastructure development for Puntland Prison.',
    category: 'Public Infrastructure',
    duration: '2015-2017',
  },
  {
    id: 7,
    title: 'Kisumu Long-Term Action Plan Project',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835357/Kisumu_long_term_action_plan_dzqkci.jpg',
    description: 'A long-term urban planning and development project in Kisumu.',
    category: 'Urban Planning',
    duration: '2014-2016',
  },
  {
    id: 8,
    title: 'Nairobi Water Distribution Master Plan',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835387/Nairobi_Master_Plan_misccs.jpg',
    description: 'Master plan for water distribution in Nairobi.',
    category: 'Public Infrastructure',
    duration: '2013-2015',
  },
  {
    id: 9,
    title: 'Proposed Construction of Kitui County Headquarters',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835349/County_Assembly_of_Kitui1_xy1c5i.jpg',
    description: 'Construction of administrative headquarters in Kitui.',
    category: 'Public Infrastructure',
    duration: '2012-2014',
  },
  {
    id: 10,
    title: 'Lungalunga, Msambweni, Kwale, and Ukunda Water Supply',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835365/Kwale_Water_Supply_1_cvdlun.jpg',
    description: 'Water supply project for coastal regions in Kenya.',
    category: 'Public Infrastructure',
    duration: '2011-2013',
  },
  {
    id: 11,
    title: 'Electro-Mechanical and Dam Instrumentation of Umaa Dam Project in Kitui',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1722861623/umaa_v4k8hc.jpg',
    description: 'Electro-mechanical works and dam instrumentation for Umaa Dam in Kitui.',
    category: 'Public Infrastructure',
    duration: '2010-2012',
  },
  {
    id: 12,
    title: 'Drilling and Construction of 3 High-Capacity Boreholes in Baricho',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1722861623/baricho_zd63om.jpg',
    description: 'Construction of high-capacity boreholes in Baricho.',
    category: 'Public Infrastructure',
    duration: '2009-2011',
  },
  {
    id: 13,
    title: 'Construction and Technical Support for Water and Sewerage Authority in Lesotho',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835374/robot_jkhffy.jpg',
    description: 'Water and sewerage infrastructure development in Lesotho.',
    category: 'Public Infrastructure',
    duration: '2008-2010',
  },
  {
    id: 14,
    title: 'Cape de Galdo Water Supply Project in Mozambique',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835373/Morogoro_water_3_hpw0uo.jpg',
    description: 'Water supply infrastructure project in Cape de Galdo, Mozambique.',
    category: 'Public Infrastructure',
    duration: '2007-2009',
  },
  {
    id: 15,
    title: 'Morogoro Water Supply Project in Tanzania',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835369/Morogoro_water_2_q7siyb.jpg',
    description: 'Water supply project in Morogoro, Tanzania.',
    category: 'Public Infrastructure',
    duration: '2006-2008',
  },
  {
    id: 16,
    title: 'Rehabilitation of the National Institute of Statistics Rwanda, Kigali Office Blocks at Muhima',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1722863887/nis_nribtc.jpg',
    description: 'Office block rehabilitation for the National Institute of Statistics Rwanda in Kigali.',
    category: 'Public Infrastructure',
    duration: '2005-2007',
  },
  {
    id: 17,
    title: 'Proposed Office Block, Ministry of Justice, Somaliland',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835380/Somaliland_-new_Ministry_of_Justice_22Jan2014_ata3oh.jpg',
    description: 'Construction of an office block for the Ministry of Justice in Somaliland.',
    category: 'Public Infrastructure',
    duration: '2004-2006',
  },
  {
    id: 18,
    title: 'Rehabilitation of Kenyatta National Hospital Prime Care Center, 9th and 10th Floors',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835358/KNH_Prime_Care_Center_1_rmrdlx.jpg',
    description: 'Rehabilitation of the Prime Care Center at Kenyatta National Hospital.',
    category: 'Healthcare',
    duration: '2003-2005',
  },
  {
    id: 19,
    title: 'Proposed Kemri Welcome Trust Office Refurbishment',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835348/Kemri_Welcome_Trust_ap29ex.jpg',
    description: 'Office refurbishment for Kemri Welcome Trust.',
    category: 'Healthcare',
    duration: '2002-2004',
  },
  {
    id: 20,
    title: 'Proposed Construction of Kitui County Headquarters',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835358/kitui-pic_l3re6i.jpg',
    description: 'Construction of administrative headquarters in Kitui.',
    category: 'Public Infrastructure',
    duration: '2001-2003',
  },
  {
    id: 21,
    title: 'Laico Regency Hotel Fire Alarm System Rehabilitation and Upgrade',
    description: 'Rehabilitation and upgrade of the fire alarm system at Laico Regency Hotel.',
    category: 'Hospitality',
    duration: '2000-2002',
  },
  {
    id: 22,
    title: 'UNICEF Somalia',
    description: 'Site assessment, survey, and engineering design services for the Somali National Laboratory Facility refurbishment in Mogadishu, Somalia.',
    category: 'Real Estate',
    duration: '1999-2001',
  },
  {
    id: 23,
    title: 'Pakistan Project',
    description: 'Consulting services for the construction of water facilities in Pakistan.',
    category: 'Public Infrastructure',
    duration: '1998-2000',
  },
];


const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};



const projectsWithImages = projectsData.filter((project) => project.image);
const projectsWithoutImages = projectsData.filter((project) => !project.image);


const Projects = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showProjectsWithoutImages, setShowProjectsWithoutImages] = useState(false);
  const [shuffledProjectsWithImages, setShuffledProjectsWithImages] = useState(shuffleArray(projectsWithImages));
  const [shuffledProjectsWithoutImages, setShuffledProjectsWithoutImages] = useState(shuffleArray(projectsWithoutImages));
  useEffect(() => {
    AOS.init({ duration: 1000 });
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleViewMoreClick = () => {
    setShowProjectsWithoutImages((prev) => !prev);
    setShuffledProjectsWithImages(shuffleArray(projectsWithImages));
    setShuffledProjectsWithoutImages(shuffleArray(projectsWithoutImages));
  };

  return (
    <>
    <Carousel />
      <section className="bg-gray-100 py-8" id="projects">
        <div className="container mx-auto px-4">
         

          {/* Projects with images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {shuffledProjectsWithImages.map((project) => (
              <div key={project.id} className="bg-white p-4 rounded-lg shadow-md" data-aos="fade-up">
                {project.image && (
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
                )}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-2">{project.description}</p>
              </div>
            ))}
          </div>
          
          <Button
            onClick={handleViewMoreClick}
            className="text-black"
          >
            {showProjectsWithoutImages ? 'Show Less' : 'View More'}
          </Button>

          {/* Conditionally render projects without images */}
          {showProjectsWithoutImages && (
            <div className="overflow-x-auto mt-8">
              <table className="min-w-full bg-slate-900 rounded-lg shadow-md">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="py-2 px-4">Title</th>
                    <th className="py-2 px-4">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {shuffledProjectsWithoutImages.map((project) => (
                    <tr key={project.id} className="border-b border-gray-200">
                      <td className="py-2 px-4">{project.title}</td>
                      <td className="py-2 px-4">{project.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
      
      <Location />
    </>
  );
};

export default Projects;