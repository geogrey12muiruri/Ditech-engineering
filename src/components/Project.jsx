import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Carousel from './Carousel'
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
    description: 'Description for Project D',
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
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProjects = (category) => {
    let projects = projectsData;

    if (category !== 'All') {
      projects = projects.filter((project) => project.category === category);
    }

    return projects.filter(
      (project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="container px-5 py-24 mx-auto">
      <Carousel />
        <div className='flex items-center justify-center p-2'>
        <div className="flex rounded-full bg-[#0d1829] px-2 w-full max-w-[600px]">
          <button className="self-center flex p-1 cursor-pointer bg-[#0d1829]">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.567 9.8895C12.2495 8.90124 12.114 7.5637 11.247 6.7325C10.3679 5.88806 9.02339 5.75928 7.99998 6.4215C7.57983 6.69308 7.25013 7.0837 7.05298 7.5435C6.85867 7.99881 6.80774 8.50252 6.90698 8.9875C7.00665 9.47472 7.25054 9.92071 7.60698 10.2675C7.97021 10.6186 8.42786 10.8563 8.92398 10.9515C9.42353 11.049 9.94062 11.0001 10.413 10.8105C10.8798 10.6237 11.2812 10.3033 11.567 9.8895Z" stroke="#ff5c5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path fillRule="evenodd" clipRule="evenodd" d="M12.433 17.8895C11.7504 16.9012 11.886 15.5637 12.753 14.7325C13.6321 13.8881 14.9766 13.7593 16 14.4215C16.4202 14.6931 16.7498 15.0837 16.947 15.5435C17.1413 15.9988 17.1922 16.5025 17.093 16.9875C16.9933 17.4747 16.7494 17.9207 16.393 18.2675C16.0298 18.6186 15.5721 18.8563 15.076 18.9515C14.5773 19.0481 14.0614 18.9988 13.59 18.8095C13.1222 18.6234 12.7197 18.3034 12.433 17.8895V17.8895Z" stroke="#ff5c5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 7.75049C11.5858 7.75049 11.25 8.08627 11.25 8.50049C11.25 8.9147 11.5858 9.25049 12 9.25049V7.75049ZM19 9.25049C19.4142 9.25049 19.75 8.9147 19.75 8.50049C19.75 8.08627 19.4142 7.75049 19 7.75049V9.25049ZM6.857 9.25049C7.27121 9.25049 7.607 8.9147 7.607 8.50049C7.607 8.08627 7.27121 7.75049 6.857 7.75049V9.25049ZM5 7.75049C4.58579 7.75049 4.25 8.08627 4.25 8.50049C4.25 8.9147 4.58579 9.25049 5 9.25049V7.75049ZM12 17.2505C12.4142 17.2505 12.75 16.9147 12.75 16.5005C12.75 16.0863 12.4142 15.7505 12 15.7505V17.2505ZM5 15.7505C4.58579 15.7505 4.25 16.0863 4.25 16.5005C4.25 16.9147 4.58579 17.2505 5 17.2505V15.7505ZM17.143 15.7505C16.7288 15.7505 16.393 16.0863 16.393 16.5005C16.393 16.9147 16.7288 17.2505 17.143 17.2505V15.7505ZM19 17.2505C19.4142 17.2505 19.75 16.9147 19.75 16.5005C19.75 16.0863 19.4142 15.7505 19 15.7505V17.2505ZM12 9.25049H19V7.75049H12V9.25049ZM6.857 7.75049H5V9.25049H6.857V7.75049ZM12 15.7505H5V17.2505H12V15.7505ZM17.143 17.2505H19V15.7505H17.143V17.2505Z" fill="#ff5c5c" />
            </svg>
          </button>

          <input
            type="text"
            className="w-full bg-[#0d1829] flex bg-transparent pl-2 text-[#cccccc] outline-0"
            placeholder="Search Projects by category"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button type="submit" className="relative p-2 bg-[#0d1829] rounded-full">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            {categories.map((category) => (
              <div
                key={category}
                className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                  {/* SVG icons can be customized based on the category */}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    {/* Add relevant paths here */}
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {
                      projectsData.filter(
                        (project) => project.category === category
                      ).length
                    }
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
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <p className="text-indigo-500 mt-2">{project.category}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Project;
