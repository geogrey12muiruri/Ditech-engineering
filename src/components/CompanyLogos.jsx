import { FaTools, FaProjectDiagram, FaWrench, FaIndustry } from "react-icons/fa";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const services = [
  {
    title: "Installation Services",
    description: "High-quality installation services for all electromechanical needs.",
    icon: <FaTools className="text-4xl text-blue-500" />,
    link: "/contact",
  },
  {
    title: "Project Management",
    description: "Efficient management of all electromechanical projects.",
    icon: <FaProjectDiagram className="text-4xl text-green-500" />,
    link: "/contact",
  },
  {
    title: "Maintenance Services",
    description: "Comprehensive maintenance services to ensure longevity and reliability.",
    icon: <FaWrench className="text-4xl text-yellow-500" />,
    link: "/contact",
  },
  {
    title: "Industrial Solutions",
    description: "Tailored solutions for industrial electromechanical requirements.",
    icon: <FaIndustry className="text-4xl text-red-500" />,
    link: "/contact",
  },
];

const CompanyLogos = ({ className }) => {
  const styles = {
    container: "min-h-screen bg-gray-100 p-4 sm:p-8",
    wrapper: "max-w-5xl mx-auto",
    title: "text-3xl font-bold text-center text-gray-800 mb-8",
    grid: "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    card: "bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center",
    icon: "mb-4",
    serviceTitle: "text-xl font-semibold text-gray-800 mb-2",
    description: "text-gray-600 mb-4",
    link: "mt-auto w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition",
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Our Services</h1>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h2 className={styles.serviceTitle}>{service.title}</h2>
              <p className={styles.description}>{service.description}</p>
              <Link to={service.link} className={styles.link} style={{ zIndex: 10 }}>
                Contact Us
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
