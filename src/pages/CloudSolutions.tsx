import React from 'react';

interface PricingPackage {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

const CloudSolutions: React.FC = () => {
  const packages: PricingPackage[] = [
    {
      name: "Basic Package",
      price: "Contact for Pricing",
      features: [
        "Static Website",
        "Basic SEO Optimization",
        "Mobile Responsive Design",
        "3 Pages included",
        "Contact Form",
        "1 Month Support"
      ]
    },
    {
      name: "Professional Package",
      price: "Contact for Pricing",
      features: [
        "Dynamic Website",
        "Advanced SEO Optimization",
        "Mobile Responsive Design",
        "Up to 10 Pages",
        "Contact Form & Newsletter",
        "Database Integration",
        "3 Months Support",
        "Content Management System"
      ],
      recommended: true
    },
    {
      name: "Enterprise Package",
      price: "Contact for Pricing",
      features: [
        "Custom Web Application",
        "Full SEO Suite",
        "Mobile Responsive Design",
        "Unlimited Pages",
        "Advanced Features Integration",
        "Database & API Integration",
        "12 Months Support",
        "Custom Admin Dashboard",
        "Security Features"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Cloud Solutions for Your Business
        </h1>
        <p className="text-xl text-gray-600">
          Scalable, secure, and reliable web solutions tailored to your needs
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-600">Custom websites and web applications built with modern technologies</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Cloud Hosting</h3>
            <p className="text-gray-600">Reliable and secure hosting solutions with 99.9% uptime</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Maintenance</h3>
            <p className="text-gray-600">Regular updates and maintenance to keep your website running smoothly</p>
          </div>
        </div>
      </div>

      {/* Pricing Packages */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Package</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden
                ${pkg.recommended ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-center mb-4">{pkg.name}</h3>
                <div className="text-center mb-8">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                </div>
                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-8 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-200">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto text-center mt-16">
        <h2 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h2>
        <p className="text-gray-600 mb-8">
          Contact us to discuss your specific requirements and get a tailored solution for your business
        </p>
        <button className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition duration-200">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default CloudSolutions;
