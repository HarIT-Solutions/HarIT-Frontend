interface ServiceFeature {
  name: string;
  included: boolean;
}

interface Package {
  name: string;
  description: string;
  features: ServiceFeature[];
  timeframe: string;
  highlight?: boolean;
}

const MobileDevelopment = () => {
  const services = [
    {
      title: "Native App Development",
      description: "Build high-performance native mobile apps for iOS and Android platforms",
      icon: "📱",
    },
    {
      title: "Cross-Platform Development",
      description: "Create apps that work seamlessly across multiple platforms",
      icon: "🔄",
    },
    {
      title: "UI/UX Design",
      description: "Intuitive and engaging user interface design for mobile applications",
      icon: "🎨",
    },
    {
      title: "App Maintenance",
      description: "Ongoing support and maintenance to keep your app running smoothly",
      icon: "🛠",
    },
  ];

  const packages: Package[] = [
    {
      name: "Basic Package",
      description: "Perfect for simple mobile applications",
      features: [
        { name: "Native iOS or Android App", included: true },
        { name: "Basic UI/UX Design", included: true },
        { name: "Essential Features", included: true },
        { name: "Basic Analytics", included: true },
        { name: "3 Months Support", included: true },
        { name: "Advanced Features", included: false },
        { name: "Custom Branding", included: false },
      ],
      timeframe: "2-3 months",
    },
    {
      name: "Professional Package",
      description: "Ideal for businesses requiring comprehensive solutions",
      features: [
        { name: "Native iOS and Android Apps", included: true },
        { name: "Advanced UI/UX Design", included: true },
        { name: "Essential Features", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "6 Months Support", included: true },
        { name: "Advanced Features", included: true },
        { name: "Custom Branding", included: true },
      ],
      timeframe: "3-5 months",
      highlight: true,
    },
    {
      name: "Enterprise Package",
      description: "Custom solutions for large-scale applications",
      features: [
        { name: "Multi-platform Development", included: true },
        { name: "Premium UI/UX Design", included: true },
        { name: "Advanced Features", included: true },
        { name: "Enterprise Analytics", included: true },
        { name: "12 Months Support", included: true },
        { name: "Custom Branding", included: true },
        { name: "Priority Support", included: true },
      ],
      timeframe: "4-6 months",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Mobile App Development Services
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Transform your ideas into powerful mobile applications with our expert development services
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Packages Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Development Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md overflow-hidden ${
                pkg.highlight ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <span className={`mr-2 ${
                        feature.included ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {feature.included ? '✓' : '×'}
                      </span>
                      <span className={feature.included ? 'text-gray-900' : 'text-gray-400'}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <p className="text-sm text-gray-600">
                    Estimated Timeframe: {pkg.timeframe}
                  </p>
                </div>
                <button className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileDevelopment;
