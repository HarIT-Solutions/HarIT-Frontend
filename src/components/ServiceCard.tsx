import { FaCloud, FaLaptopCode, FaRocket } from "react-icons/fa";

const Services = [
  {
    icon: <FaRocket className="text-4xl" />,
    title: "Digital Transformation",
    description:
      "Transform your business with modern digital solutions and strategies",
  },
  {
    icon: <FaLaptopCode className="text-4xl" />,
    title: "Custom Software Development",
    description:
      "Tailored software solutions to meet your specific business needs",
  },
  {
    icon: <FaCloud className="text-4xl" />,
    title: "Cloud Solutions",
    description:
      "Secure and scalable cloud infrastructure for your growing business",
  },
];

const ServiceCard = () => (
  <section className="container py-16 mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">What we offer</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {Services.map((service, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 
        hover:shadow-xl hover:transform hover:scale-105"
        >
          <div className="text-blue-600 mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServiceCard;
