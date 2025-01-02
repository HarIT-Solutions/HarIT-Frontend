import React from 'react';

interface ServicePackage {
  name: string;
  features: string[];
  level: 'Basic' | 'Professional' | 'Enterprise';
  description: string;
}

const webPackages: ServicePackage[] = [
  {
    name: 'Basic Website Package',
    features: [
      'Responsive Design',
      'Up to 5 Pages',
      'Contact Form',
      'Basic SEO Setup',
      'Mobile Friendly',
      'Social Media Integration'
    ],
    level: 'Basic',
    description: 'Perfect for small businesses looking to establish their online presence'
  },
  {
    name: 'Professional Website Package',
    features: [
      'Everything in Basic Package',
      'Up to 10 Pages',
      'Content Management System',
      'Advanced SEO Optimization',
      'Blog Integration',
      'Email Newsletter Setup',
      'Performance Optimization',
      'Security Features'
    ],
    level: 'Professional',
    description: 'Ideal for growing businesses requiring more features and functionality'
  },
  {
    name: 'Enterprise Solution',
    features: [
      'Everything in Professional Package',
      'Unlimited Pages',
      'E-commerce Integration',
      'Custom Features Development',
      'Advanced Analytics',
      'Priority Support',
      'Regular Maintenance',
      'Database Integration',
      'API Development'
    ],
    level: 'Enterprise',
    description: 'Complete solution for large businesses with complex requirements'
  }
];

const WebDevelopment: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Web Development Services
        </h1>
        <p className="text-xl text-gray-600">
          Creating powerful, responsive, and secure websites tailored to your needs
        </p>
      </div>

      {/* Services Overview */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {['Frontend Development', 'Backend Development', 'E-commerce Solutions', 'Custom Web Applications'].map((service) => (
            <div key={service} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Packages Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Service Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {webPackages.map((pkg) => (
            <div key={pkg.name} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
              <p className="text-gray-600 mb-6">{pkg.description}</p>
              <ul className="space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {/* Add your pricing button here */}
              <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div>
        <h2 className="text-3xl font-bold mb-8">Technologies We Use</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            'React', 'Angular', 'Vue.js',
            'Node.js', 'Python', 'PHP',
            'MySQL', 'MongoDB', 'PostgreSQL',
            'AWS', 'Docker', 'Kubernetes'
          ].map((tech) => (
            <div key={tech} className="bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition-shadow duration-300">
              <span className="font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 text-center bg-gray-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-gray-600 mb-6">
          Let's discuss how we can help you achieve your goals
        </p>
        <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default WebDevelopment;
