import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Carousel from './Carousel'
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
    title: "Nairobi Water Distribution Master Plan",
    image: "https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835387/Nairobi_Master_Plan_misccs.jpg",
    description: "Nairobi Water Distribution Master Plan",
    category: "",
  },
  // add 5 more projects for the construction category

  {
    id: 10,
    title: "Proposed construction of Kitui County Headquarters ",
    image: "https://res.cloudinary.com/dws2bgxg4/image/upload/v1721835349/County_Assembly_of_Kitui1_xy1c5i.jpg",
    description: "Proposed construction of Kitui County Headquarters ",
    category: ""
  }
];

const categories = [
  'Real Estate',
  'Consumer Electronics',
  'Home and Building',
  'Environmental Monitoring System',
];

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = (category) => {
    let projects = projectsData;

    if (category !== 'All') {
      projects = projects.filter((project) => project.category === category);
    }

    return projects;
  };

  return (
    <div className="container px-5 py-24 mx-auto">
      <Carousel />
      
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex overflow-x-auto no-scrollbar space-x-4">
            {categories.map((category) => (
              <div
                key={category}
                className="flex-none cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                <div className="border-2 border-gray-600 px-4 py-2 rounded-lg transform transition duration-500 hover:scale-110">
                  <h2 className="title-font font-medium text-xl text-gray-900">
                    {projectsData.filter((project) => project.category === category).length}
                  </h2>
                  <p className="leading-relaxed">{category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <h2 className="text-2xl font-bold mb-4">{selectedCategory} Projects</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {filteredProjects(selectedCategory).map((project) => (
          <SwiperSlide key={project.id}>
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-50 object-cover mb-4 rounded"
              />
              <p className="text-gray-600">{project.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Location />
    </div>
  );
};

export default Project;