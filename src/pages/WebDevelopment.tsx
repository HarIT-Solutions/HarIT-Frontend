import React from "react";

interface ServicePackage {
  name: string;
  features: string[];
  level: "Basic" | "Professional" | "Enterprise";
  description: string;
}

const webPackages: ServicePackage[] = [
  {
    name: "Basic Website Package",
    features: [
      "Responsive Design",
      "Up to 5 Pages",
      "Contact Form",
      "Basic SEO Setup",
      "Mobile Friendly",
      "Social Media Integration",
    ],
    level: "Basic",
    description:
      "Perfect for small businesses looking to establish their online presence",
  },
  {
    name: "Professional Website Package",
    features: [
      "Everything in Basic Package",
      "Up to 10 Pages",
      "Content Management System",
      "Advanced SEO Optimization",
      "Blog Integration",
      "Email Newsletter Setup",
      "Performance Optimization",
      "Security Features",
    ],
    level: "Professional",
    description:
      "Ideal for growing businesses requiring more features and functionality",
  },
  {
    name: "Enterprise Solution",
    features: [
      "Everything in Professional Package",
      "Unlimited Pages",
      "E-commerce Integration",
      "Custom Features Development",
      "Advanced Analytics",
      "Priority Support",
      "Regular Maintenance",
      "Database Integration",
      "API Development",
    ],
    level: "Enterprise",
    description:
      "Complete solution for large businesses with complex requirements",
  },
];

const WebDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Website Development
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Creating powerful, responsive, and secure websites that drive your
            business forward
          </p>
        </div>

        {/* Services Overview */}
        <div className="mt-24 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Frontend Development",
                description:
                  "Beautiful, responsive interfaces that engage users",
              },
              {
                title: "Backend Development",
                description:
                  "Robust server-side solutions that power your applications",
              },
              {
                title: "E-commerce Solutions",
                description: "Custom online stores that drive sales",
              },
              {
                title: "Custom Web Applications",
                description:
                  "Tailored solutions for your unique business needs",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Packages Section */}
        <div className="my-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Service Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100
                             ${
                               pkg.level === "Professional"
                                 ? "transform md:-translate-y-4"
                                 : ""
                             }`}
              >
                {pkg.level === "Professional" && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                <p className="text-gray-600 mb-8">{pkg.description}</p>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0"
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
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300
                                ${
                                  pkg.level === "Professional"
                                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
                                    : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                                }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="my-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "React",
              "Angular",
              "Vue.js",
              "Node.js",
              "Python",
              "PHP",
              "MySQL",
              "MongoDB",
              "PostgreSQL",
              "AWS",
              "Docker",
              "Kubernetes",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <span className="font-medium text-gray-800">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto text-center mt-16">
        <h2 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h2>
        <p className="text-gray-600 mb-8">
          Contact us to discuss your specific requirements and get a tailored
          solution for your business
        </p>
        <button className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition duration-200">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default WebDevelopment;
