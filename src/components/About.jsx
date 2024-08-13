import React from 'react';
import Carousel from './Carousel';
import Location from './Location';

const About = () => {
  return (
    <div className="bg-white text-black">
        <Carousel />
        <section id="about-us" className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-gray-300 bg-white">
            <div className="relative mx-auto max-w-5xl text-center">
                <span className="text-gray-600 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                    About Us
                </span>
                <h2 className="block w-full bg-gradient-to-b from-black to-gray-800 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                    Ditech Engineering Ltd.
                </h2>
                <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-600">
                    Ditech Engineering Ltd. is East Africa's premier provider of Electrical-Mechanical and Turnkey consultancy services. Headquartered on the 5th Floor of Nextgen Building, Mombasa Road, next to EKA Hotel in Nairobi, Kenya, we offer a comprehensive range of electrical-mechanical contracting and consultancy services to industrial, commercial, and institutional clients across the continent.
                </p>
            </div>

            <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-md border border-gray-300 bg-white p-8 text-center shadow">
                    <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border border-orange-500" style={{ backgroundImage: 'linear-gradient(rgb(255, 165, 0) 0%, rgba(255, 165, 0, 0.8) 100%)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-color-swatch" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                            <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                            <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                            <line x1="17" y1="17" x2="17" y2="17.01"></line>
                        </svg>
                    </div>
                    <h3 className="mt-6 text-gray-800">Our Vision</h3>
                    <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-600">
                        To be the market leader in electromechanical services in the African region, delivering total quality management by offering high-quality installation and maintenance services for exceptional customer satisfaction.
                    </p>
                </div>

                <div className="rounded-md border border-gray-300 bg-white p-8 text-center shadow">
                    <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border border-orange-500" style={{ backgroundImage: 'linear-gradient(rgb(255, 165, 0) 0%, rgba(255, 165, 0, 0.8) 100%)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bolt" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
                        </svg>
                    </div>
                    <h3 className="mt-6 text-gray-800">Our Mission</h3>
                    <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-600">
                        To offer quality, safe, innovative, and flexible electro-mechanical and turnkey services. We achieve this through our commitment to supporting technical, managerial, and business operational systems, driven by a highly qualified and motivated team.
                    </p>
                </div>

                <div className="rounded-md border border-gray-300 bg-white p-8 text-center shadow">
                    <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border border-orange-500" style={{ backgroundImage: 'linear-gradient(rgb(255, 165, 0) 0%, rgba(255, 165, 0, 0.8) 100%)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tools" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                            <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                            <polyline points="12 8 7 3 3 7 8 12"></polyline>
                            <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                            <polyline points="16 12 21 17 17 21 12 16"></polyline>
                            <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
                        </svg>
                    </div>
                    <h3 className="mt-6 text-gray-800">Our Values</h3>
                    <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-600">
                        At Ditech Engineering, we believe in corporate responsibility, honoring ethical values, and respecting people, communities, and the environment. We prioritize the health and safety of our employees and environmental stewardship. We hold ourselves accountable to our staff, clients, community, and industry, ensuring our actions positively impact all stakeholders.
                    </p>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b" style={{ backgroundImage: 'linear-gradient(to right top, rgba(255, 165, 0, 0.2) 0%, transparent 50%, transparent 100%)', borderColor: 'rgba(255, 165, 0, 0.2)' }}>
            </div>
            <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full" style={{ backgroundImage: 'linear-gradient(to left top, rgba(255, 165, 0, 0.2) 0%, transparent 50%, transparent 100%)', borderColor: 'rgba(255, 165, 0, 0.2)' }}>
            </div>
        </section>
        <Location />
    </div>
  );
};

export default About;
