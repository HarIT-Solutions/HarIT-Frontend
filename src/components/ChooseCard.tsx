import { FaChartLine, FaHandshake, FaUserTie } from "react-icons/fa";

const Choices = [
  {
    icon: <FaUserTie className="text-4xl" />,
    title: "Expert Team",
    description:
      "Highly skilled professionals with years of industry experience",
  },
  {
    icon: <FaChartLine className="text-4xl" />,
    title: "Proven Results",
    description: "Track record of delivering successful projects on time",
  },
  {
    icon: <FaHandshake className="text-4xl" />,
    title: "Customer Focus",
    description: "Dedicated to understanding and meeting your business needs",
  },
];

const ChooseCard = () => (
  <section className="container py-16 mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">Why choose us</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {Choices.map((choice, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 
        hover:shadow-xl hover:transform hover:scale-105"
        >
          <div className="text-blue-600 mb-4">{choice.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{choice.title}</h3>
          <p className="text-gray-600">{choice.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ChooseCard;
