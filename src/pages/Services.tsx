import React from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web applications built with modern technologies",
      icon: "💻"
    },
    {
      id: 2,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      icon: "📱"
    },
    {
      id: 3,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment",
      icon: "☁️"
    },
    {
      id: 4,
      title: "Consulting",
      description: "Technical consultation and solution architecture",
      icon: "📊"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover what we can do for your business
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
