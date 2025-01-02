import { useNavigate } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import ChooseCard from "../components/ChooseCard";
import ExpertCard from "../components/ExpertCard";
import ReviewCard from "../components/ReviewCard";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">
        <div className="container mx-auto px-6">
          <h1 className="md:text-5xl text-3xl font-bold mb-4">
            Transform Your Business with Modern IT Solutions
          </h1>
          <p className="md:text-xl text-sm mb-8">
            Empowering businesses with cutting-edge technology and innovative
            solutions
          </p>
          <button
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold 
            transition-all duration-300 hover:bg-opacity-90 hover:transform hover:scale-105"
            onClick={() => navigate("/book-consultation")}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Services Section */}
      <ServiceCard />

      {/* Why Choose Us Section */}

      <ChooseCard />

      {/* Meet Our Experts Section */}

      <ExpertCard />

      {/* Client Reviews Section */}

      <ReviewCard />

      {/* Get in Touch Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="mb-8">
            Schedule a free consultation with our experts today
          </p>
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold 
            hover:bg-blue-700 transition-duration-300"
            onClick={() => navigate("/book-consultation")}
          >
            Book Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
