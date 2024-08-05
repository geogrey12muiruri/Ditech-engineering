import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import Location from './Location';

// Sample data for projects
const projectsData = [
  {
    id: 1,
    title: 'Victoria Gardens Estate',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835393/Victoria_Gardens_Kisumu_wegniv.jpg',
    description: '91 units comprising of 4, 3 and 2 bedroom Massionnets',
    category: 'Real Estate',
  },
  {
    id: 2,
    title: 'Proposed Mini Appartments',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835364/Mimi_Apartments_q3ft7g.jpg',
    description: 'Design of Electro Mechanical Works for a block of appartments with 23 units behind Nakumatt Nyali Mombasa',
    category: 'Construction',
  },
  {
    id: 3,
    title: 'Best Western Hotel',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835352/Best_Western_Hotel_imdsdn.jpg',
    description: 'Design and construction of the Best Hotel Western',
    category: 'Home and Building',
  },
  {
    id: 4,
    title: 'Simasona Towers Juba',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835380/Simasona_Towers_Juba_qjiine.jpg',
    description: 'Simasona Towers Juba',
    category: 'Consumer Electronics',
  },
  {
    id: 5,
    title: 'Sakita Apartments',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835378/Sikita_Apartments_2_zz5wx4.jpg',
    description: 'Design and tender documentation of a 4 units apartment blocks in Bungoma',
    category: 'Home and Building',
  },
  {
    id: 6,
    title: 'Putland Prison',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835372/Putland_Prison_haqu8d.jpg',
    description: 'Putland Prison',
    category: 'Home and Building',
  },
  {
    id: 7,
    title: 'Mulago Refaral Hospital',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835366/Mulago-referral-hospital_acj6fk.jpg',
    description: 'Mulago Refaral Hospital',
    category: 'Environmental Monitoring System',
  },
  {
    id: 8,
    title: 'Project H',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835357/Kisumu_long_term_action_plan_dzqkci.jpg',
    description: 'Kisumu Long Term Action Plan Project',
    category: 'Environmental Monitoring System',
  },
  {
    id: 9,
    title: 'Nairobi Water Distribution Master Plan',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835387/Nairobi_Master_Plan_misccs.jpg',
    description: 'Nairobi Water Distribution Master Plan',
    category: '',
  },
  {
    id: 10,
    title: 'Proposed construction of Kitui County Headquarters',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835349/County_Assembly_of_Kitui1_xy1c5i.jpg',
    description: 'Proposed construction of Kitui County Headquarters',
    category: '',
  },
  {
    id: 11,
    title: 'Lungalunga, Msambweni, Kwale and Ukunda Water Supply',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835365/Kwale_Water_Supply_1_cvdlun.jpg',
    description: 'Lungalunga, Msambweni, Kwale and Ukunda Water Supply',
    category: '',
  },
  {
    id: 12,
    title: 'ElectroMechanical and Dam instrumentation of Umaa Dam project in Kitui',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1722861623/umaa_v4k8hc.jpg',
    description: 'ElectroMechanical and Dam instrumentation of Umaa Dam project in Kitui',
    category: '',
  },
  {
    id: 13,
    title: 'Drilling and construction of 3 High-capacity boreholes in Baricho',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1722861623/baricho_zd63om.jpg',
    description: 'Drilling and construction of 3 High-capacity boreholes in Baricho',
    category: '',
  },
  {
    id: 14,
    title: 'Construction and Technical support of water and Sewerage Authority in Lesotho',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835374/robot_jkhffy.jpg',
    description: 'Construction and Technical support of water and Sewerage Authority in Lesotho',
    category: '',
  },
  {
    id: 15,
    title: 'Cape de Galdo Water Supply project in Mozambique',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835373/Morogoro_water_3_hpw0uo.jpg',
    description: 'Cape de Galdo Water Supply project in Mozambique',
    category: '',
  },
  {
    id: 16,
    title: 'Morogoro Water Supply project in Tanzania',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835369/Morogoro_water_2_q7siyb.jpg',
    description: 'Morogoro Water Supply project in Tanzania',
    category: '',
  },
  {
    id: 17,
    title: 'Rehabilitation of the National Institute of Statistics Rwanda, Kigali Office Blocks at Muhima',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1722863887/nis_nribtc.jpg',
    description: 'Rehabilitation of the National Institute of Statistics Rwanda, Kigali Office Blocks at Muhima',
    category: '',
  },
  {
    id: 18,
    title: 'Proposed office block Ministry of Justice, Somaliland',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835380/Somaliland_-new_Ministry_of_Justice_22Jan2014_ata3oh.jpg',
    description: 'Proposed office block Ministry of Justice, Somaliland',
    category: '',
  },
  {
    id: 19,
    title: 'Rehabilitation of Kenyatta National Hospital Prime care center 9th and 10th floor',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835358/KNH_Prime_Care_Center_1_rmrdlx.jpg',
    description: 'Rehabilitation of Kenyatta National Hospital Prime care center 9th and 10th floor',
    category: '',
  },
  {
    id: 20,
    title: 'Proposed Kemri Welcome Trust Office refurbishment',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835358/KNH_Prime_Care_Center_1_rmrdlx.jpg',
    description: 'Proposed Kemri Welcome Trust Office refurbishment',
    category: '',
  },
];

const categories = [
  'All',
  'Real Estate',
  'Consumer Electronics',
  'Home and Building',
  'Environmental Monitoring System',
];

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = (category) => {
    if (category === 'All') {
      return projectsData;
    }
    return projectsData.filter((project) => project.category === category);
  };

  return (
    <div className="container px-5 py-24 mx-auto">
      <Carousel />
      
      <section className="text-white body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex overflow-x-auto no-scrollbar space-x-4">
            {categories.map((category) => (
              <div
                key={category}
                className="flex-none cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                <div className="border-2 border-gray-600 px-4 py-2 rounded-lg transform transition duration-500 hover:scale-110">
                  <h2 className="title-font font-medium text-xl text-white">
                    {category === 'All' ? projectsData.length : projectsData.filter((project) => project.category === category).length}
                  </h2>
                  <p className="leading-relaxed text-white">{category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-white body-font">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects(selectedCategory).map((project) => (
              <div key={project.id} className="p-4">
                <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="p-6">
                    <h2 className="text-lg text-white font-medium title-font mb-4">{project.title}</h2>
                    {/* <p className="leading-relaxed text-white">{project.description}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Location />
    </div>
  );
};

export default Project;
