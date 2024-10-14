import { useState } from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

    const services = [
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'Mobile App Development', path: '/services/mobile-app-development' },
        { name: 'Cloud Solutions', path: '/services/cloud-solutions' },
        { name: 'Data Analytics', path: '/services/data-analytics' },
      ];

    return (
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">

            {/* Logo */}
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/" className="text-xl font-bold text-gray-800">
                Logo
              </Link>
            </div>
  
            {/* Mobile menu button */}
            <div className="-mr-2 -my-2 md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open menu
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </span>
              </button>
            </div>
  
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10">
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button className="text-base font-medium text-gray-500 hover:text-gray-900 inline-flex items-center">
                Services
                <svg className="ml-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {isServicesDropdownOpen && (
                <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              {service.name}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
              <Link to="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">About</Link>
              <Link to="/clients" className="text-base font-medium text-gray-500 hover:text-gray-900">Clients</Link>
              <Link to="/book-consultation" className="text-base font-medium text-gray-500 hover:text-gray-900">Book Free Consultation</Link>
              <Link to="/blogs" className="text-base font-medium text-gray-500 hover:text-gray-900">Blogs</Link>
            </nav>
  
            {/* Desktop Controls */}
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Translate
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile menu, show/hide based on menu state */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Services</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</Link>
            <Link to="/clients" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Clients</Link>
            <Link to="/book-consultation" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Book Free Consultation</Link>
            <Link to="/blogs" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Blogs</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
              <button className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Translate
              </button> 
          </div>
        </div>
      </header>
    );
  };

export default Header