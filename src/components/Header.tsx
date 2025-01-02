import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const services = [
  { name: "Web Development", path: "/webdevelopment" },
  {
    name: "Mobile App Development",
    path: "/mobiledevelopment",
  },
  { name: "Cloud Solutions", path: "/cloudsolutions" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const toggleServicesDropdown = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event from bubbling up
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const handleServiceClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsServicesDropdownOpen(false); // Close dropdown after clicking a service
  };

  // Close dropdown when clicking anywhere else
  useEffect(() => {
    const closeDropdown = () => setIsServicesDropdownOpen(false);
    document.addEventListener('click', closeDropdown);
    return () => document.removeEventListener('click', closeDropdown);
  }, []);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 mb-6 right-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="text-xl font-bold text-gray-800">
              <img
                className="h-8"
                src="src\assets\logo\harIT-solutions.jpg"
                alt="HarIT solutions logo"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <div
              className="relative"
            >
              <button onClick={toggleServicesDropdown} className="text-base font-medium text-gray-500 hover:text-gray-900 inline-flex items-center">
                Services
                <svg
                  className="ml-2 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isServicesDropdownOpen && (
                <div onClick={(e) => e.stopPropagation()} className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative flex flex-wrap gap-4 bg-white px-5 py-6">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          onClick={handleServiceClick}
                          className="flex-1 min-w-[200px] p-3 flex items-center justify-center rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                          <p className="text-base font-medium text-gray-900">
                            {service.name}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/about"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              About
            </Link>
            <Link
              to="/clients"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Clients
            </Link>
            <Link
              to="/book-consultation"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Book Free Consultation
            </Link>
            <Link
              to="/blogs"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Blogs
            </Link>
          </nav>

          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
            <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden fixed left-0 right-0 bg-white border-t border-gray-200 shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
    <div className="space-y-1">
      <button
        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
        className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
      >
        <span>Services</span>
        <svg
          className={`ml-2 h-5 w-5 text-gray-400 transform transition-transform ${
            isMobileServicesOpen ? 'rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isMobileServicesOpen && (
        <div className="pl-4">
          {services.map((service) => (
            <Link
              key={service.name}
              to={service.path}
              onClick={() => {
                setIsMobileServicesOpen(false);
                setIsMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              {service.name}
            </Link>
          ))}
        </div>
      )}
    </div>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            About
          </Link>
          <Link
            to="/clients"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Clients
          </Link>
          <Link
            to="/book-consultation"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Book Free Consultation
          </Link>
          <Link
            to="/blogs"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Blogs
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <button className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
