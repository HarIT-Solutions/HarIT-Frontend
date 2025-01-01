import React from 'react';
import { FaRocket, FaLaptopCode, FaCloud, FaUserTie, FaChartLine, FaHandshake } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">
            Transform Your Business with Modern IT Solutions
          </h1>
          <p className="text-xl mb-8">
            Empowering businesses with cutting-edge technology and innovative solutions
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold 
            transition-all duration-300 hover:bg-opacity-90 hover:transform hover:scale-105" onClick={() => navigate('/book-consultation')}>
            Get Started
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<FaRocket className="text-4xl" />}
              title="Digital Transformation"
              description="Transform your business with modern digital solutions and strategies"
            />
            <ServiceCard 
              icon={<FaLaptopCode className="text-4xl" />}
              title="Custom Software Development"
              description="Tailored software solutions to meet your specific business needs"
            />
            <ServiceCard 
              icon={<FaCloud className="text-4xl" />}
              title="Cloud Solutions"
              description="Secure and scalable cloud infrastructure for your growing business"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<FaUserTie className="text-4xl" />}
              title="Expert Team"
              description="Highly skilled professionals with years of industry experience"
            />
            <FeatureCard 
              icon={<FaChartLine className="text-4xl" />}
              title="Proven Results"
              description="Track record of delivering successful projects on time"
            />
            <FeatureCard 
              icon={<FaHandshake className="text-4xl" />}
              title="Customer Focus"
              description="Dedicated to understanding and meeting your business needs"
            />
          </div>
        </div>
      </section>

      {/* Meet Our Experts Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ExpertCard 
              image="/src/assets/expert1.jpg"
              name="John Doe"
              position="Technical Lead"
            />
            <ExpertCard 
              image="/src/assets/expert2.jpg"
              name="Jane Smith"
              position="Solutions Architect"
            />
            <ExpertCard 
              image="/src/assets/expert3.jpg"
              name="Mike Johnson"
              position="Cloud Specialist"
            />
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Client Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ReviewCard 
              content="Outstanding service and exceptional results. Highly recommended!"
              author="Sarah Wilson"
              company="Tech Corp"
            />
            <ReviewCard 
              content="Their expertise helped transform our business processes completely."
              author="David Brown"
              company="Innovation Labs"
            />
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="mb-8">Schedule a free consultation with our experts today</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold 
            hover:bg-blue-700 transition-duration-300" onClick={() => navigate('/book-consultation')}>
            Book Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 
    hover:shadow-xl hover:transform hover:scale-105">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeatureCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="text-center p-6">
    <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ExpertCard = ({ image, name, position }: {
  image: string;
  name: string;
  position: string;
}) => (
  <div className="text-center">
    <div className="w-32 h-32 mx-auto mb-4">
      <img src={image} alt={name} className="w-full h-full rounded-full object-cover" />
    </div>
    <h3 className="text-xl font-semibold mb-1">{name}</h3>
    <p className="text-gray-600">{position}</p>
  </div>
);

const ReviewCard = ({ content, author, company }: {
  content: string;
  author: string;
  company: string;
}) => (
  <div className="bg-gray-50 p-6 rounded-lg">
    <p className="text-gray-600 mb-4">{content}</p>
    <p className="font-semibold">{author}</p>
    <p className="text-sm text-gray-500">{company}</p>
  </div>
);

export default Home;