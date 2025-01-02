import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">HarIT Solutions</h3>
            <p className="mb-2">Nairobi, Kenya</p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/webdevelopment" className="hover:text-gray-300">Website Development</Link></li>
              <li><Link to="/mobiledevelopment" className="hover:text-gray-300">Mobile Development</Link></li>
              <li><Link to="/cloudsolutions" className="hover:text-gray-300">Cloud Solutions</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300">Careers</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Contact</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Blogs</Link></li>
              <li><Link to="/faqs" className="hover:text-gray-300">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Terms of Service</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} HarIT Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer