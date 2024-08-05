import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from './Carousel';
import Location from './Location';

const projectsData = [
  {
    id: 1,
    title: 'Victoria Gardens Estate',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835393/Victoria_Gardens_Kisumu_wegniv.jpg',
    description: '91 units comprising of 4, 3, and 2 bedroom Massionnets in Kisumu.',
    category: 'Real Estate',
  },
  {
    id: 2,
    title: 'Proposed Mini Apartments',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835364/Mimi_Apartments_q3ft7g.jpg',
    description: 'Design of Electro Mechanical Works for a block of apartments with 23 units behind Nakumatt Nyali, Mombasa.',
    category: 'Real Estate',
  },
  {
    id: 3,
    title: 'Best Western Hotel',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835352/Best_Western_Hotel_imdsdn.jpg',
    description: 'Design and construction of the Best Western Hotel.',
    category: 'Hospitality',
  },
  {
    id: 4,
    title: 'Simasona Towers Juba',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835380/Simasona_Towers_Juba_qjiine.jpg',
    description: 'High-rise tower construction in Juba.',
    category: 'Construction',
  },
  {
    id: 5,
    title: 'Sakita Apartments',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835378/Sikita_Apartments_2_zz5wx4.jpg',
    description: 'Design and tender documentation of a 4-unit apartment block in Bungoma.',
    category: 'Real Estate',
  },
  {
    id: 6,
    title: 'Putland Prison',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835372/Putland_Prison_haqu8d.jpg',
    description: 'Construction and infrastructure development for Putland Prison.',
    category: 'Public Infrastructure',
  },
  {
    id: 7,
    title: 'Mulago Referral Hospital',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835366/Mulago-referral-hospital_acj6fk.jpg',
    description: 'Comprehensive design and construction for Mulago Referral Hospital.',
    category: 'Healthcare',
  },
  {
    id: 8,
    title: 'Kisumu Long Term Action Plan Project',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835357/Kisumu_long_term_action_plan_dzqkci.jpg',
    description: 'Long-term urban planning and development project in Kisumu.',
    category: 'Urban Planning',
  },
  {
    id: 9,
    title: 'Nairobi Water Distribution Master Plan',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835387/Nairobi_Master_Plan_misccs.jpg',
    description: 'Master plan for water distribution in Nairobi.',
    category: 'Public Infrastructure',
  },
  {
    id: 10,
    title: 'Proposed construction of Kitui County Headquarters',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835349/County_Assembly_of_Kitui1_xy1c5i.jpg',
    description: 'Construction of administrative headquarters in Kitui.',
    category: 'Public Infrastructure',
  },
  {
    id: 11,
    title: 'Lungalunga, Msambweni, Kwale and Ukunda Water Supply',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835365/Kwale_Water_Supply_1_cvdlun.jpg',
    description: 'Water supply project for coastal regions in Kenya.',
    category: 'Public Infrastructure',
  },
  {
    id: 12,
    title: 'ElectroMechanical and Dam Instrumentation of Umaa Dam project in Kitui',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1722861623/umaa_v4k8hc.jpg',
    description: 'ElectroMechanical works and dam instrumentation for Umaa Dam in Kitui.',
    category: 'Public Infrastructure',
  },
  {
    id: 13,
    title: 'Drilling and construction of 3 High-capacity boreholes in Baricho',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1722861623/baricho_zd63om.jpg',
    description: 'Construction of high-capacity boreholes in Baricho.',
    category: 'Public Infrastructure',
  },
  {
    id: 14,
    title: 'Construction and Technical support of water and Sewerage Authority in Lesotho',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835374/robot_jkhffy.jpg',
    description: 'Water and sewerage infrastructure development in Lesotho.',
    category: 'Public Infrastructure',
  },
  {
    id: 15,
    title: 'Cape de Galdo Water Supply project in Mozambique',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835373/Morogoro_water_3_hpw0uo.jpg',
    description: 'Water supply infrastructure project in Cape de Galdo, Mozambique.',
    category: 'Public Infrastructure',
  },
  {
    id: 16,
    title: 'Morogoro Water Supply project in Tanzania',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835369/Morogoro_water_2_q7siyb.jpg',
    description: 'Water supply project in Morogoro, Tanzania.',
    category: 'Public Infrastructure',
  },
  {
    id: 17,
    title: 'Rehabilitation of the National Institute of Statistics Rwanda, Kigali Office Blocks at Muhima',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1722863887/nis_nribtc.jpg',
    description: 'Office block rehabilitation for the National Institute of Statistics Rwanda in Kigali.',
    category: 'Public Infrastructure',
  },
  {
    id: 18,
    title: 'Proposed office block Ministry of Justice, Somaliland',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835380/Somaliland_-new_Ministry_of_Justice_22Jan2014_ata3oh.jpg',
    description: 'Office block construction for the Ministry of Justice in Somaliland.',
    category: 'Public Infrastructure',
  },
  {
    id: 19,
    title: 'Rehabilitation of Kenyatta National Hospital Prime Care Center 9th and 10th floor',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835358/KNH_Prime_Care_Center_1_rmrdlx.jpg',
    description: 'Rehabilitation of the Prime Care Center at Kenyatta National Hospital.',
    category: 'Healthcare',
  },
  {
    id: 20,
    title: 'Proposed Kemri Welcome Trust Office refurbishment',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835358/KNH_Prime_Care_Center_1_rmrdlx.jpg',
    description: 'Office refurbishment for Kemri Welcome Trust.',
    category: 'Healthcare',
  },
  {
    id: 21,
    title: 'Proposed construction of Kitui County Headquarters',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835358/kitui-pic_l3re6i.jpg',
    description: 'Construction of administrative headquarters in Kitui.',
    category: 'Public Infrastructure',
  },
  {
    id: 22,
    title: 'Laico Regency Hotel Fire alarm system rehabilitation and upgrade',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1722870957/laico_morbqh.jpg',
    description: 'Rehabilitation and upgrade of the fire alarm system at Laico Regency Hotel.',
    category: 'Hospitality',
  },
  {
    id: 23,
    title: 'Norwegian People’s Aid Development Plan for Four Refugee Camps in Ethiopia',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1722872087/ethiopia_j4yi9i.jpg',
    description: 'Development plan for four refugee camps in Ethiopia.',
    category: 'Public Infrastructure',
  },
  {
    id: 24,
    title: 'Electrical Audit for East African Breweries Ltd in Kenya, Uganda and Tanzania',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1722872290/east_africa_yiqhdc.jpg',
    description: 'Electrical audit for East African Breweries Ltd across Kenya, Uganda, and Tanzania.',
    category: 'Industrial',
  },
  {
    id: 25,
    title: 'Simu Ya Jamii Project',
    image: 'https://res.cloudinary.com/dws2bgxg4/image/upload/v1722872290/east_africa_yiqhdc.jpg',
    description: 'Telecommunications infrastructure project for community phone services.',
    category: 'Telecommunications',
  }
];


const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Fetching the projects data from the server or any other source
    setProjects(projectsData);
    AOS.init({ duration: 1000 });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects; // Display all projects if no category is selected

  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-16 bg-white">
      {/* Carousel Component */}
      <div className="w-full mb-8">
        <Carousel /> {/* Adjust as per your carousel component */}
      </div>

      {/* Categories Section */}
      <div className="w-full mb-8 overflow-x-auto">
        <div className="flex flex-nowrap gap-4">
          {['Real Estate', 'Hospitality', 'Construction', 'Public Infrastructure', 'Healthcare', 'Urban Planning', 'Industrial', 'Telecommunications'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg border ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
          <button
            className={`px-4 py-2 rounded-lg border ${selectedCategory === '' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
            onClick={() => handleCategoryChange('')}
          >
            All
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} data-aos="fade-up" className="bg-white rounded-lg shadow-md p-4">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
              <span className="block mt-4 text-sm font-medium text-gray-500">{project.category}</span>
            </div>
          </div>
        ))}
      </div>
      <Location />
    </div>
  );
};

export default Projects;