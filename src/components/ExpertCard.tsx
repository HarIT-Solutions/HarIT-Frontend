import { BsGlobe2, BsInstagram } from "react-icons/bs";

const Experts = [
  {
    image: "/src/assets/expert1.jpg",
    name: "Harrison Itotia",
    position: "Technical Lead",
    linkedin: "https://www.linkedin.com/in/harrison-itotia/",
    website: "https://harrisonitotia.com",
  },
  {
    image: "/src/assets/expert2.jpg",
    name: "Jane Smith",
    position: "Solutions Architect",
    linkedin: "https://www.linkedin.com/in/harrison-itotia/",
    website: "https://harrisonitotia.com",
  },
  {
    image: "/src/assets/expert3.jpg",
    name: "Mike Johnson",
    position: "Cloud Specialist",
    linkedin: "https://www.linkedin.com/in/harrison-itotia/",
    website: "https://harrisonitotia.com",
  },
];

const ExpertCard = () => (
  <section className="container py-16 mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">Meet Our Experts</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {Experts.map((expert, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 
        hover:shadow-xl hover:transform hover:scale-105"
        >
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">{expert.name}</h3>
            <p className="text-gray-600">{expert.position}</p>

            <div className="absolute inset-0" />

            {/* Social Icons */}
            <div className="absolute top-3 right-4 flex gap-2 opacity-100">
              <a
                href={expert.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 backdrop-blur-sm rounded-full bg-purple-500/50 "
              >
                <BsInstagram className="w-5 h-5 " />
              </a>
              <a
                href={expert.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 backdrop-blur-sm rounded-full bg-purple-500/50"
              >
                <BsGlobe2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ExpertCard;
