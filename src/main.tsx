import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Clients from './pages/Clients.tsx'
import Services from './pages/Services.tsx'
import BookFreeConsultation from './pages/BookFreeConsultation.tsx'
import Faqs from './pages/Faqs.tsx'
import WebDevelopment from './pages/WebDevelopment.tsx'
import MobileDevelopment from './pages/MobileDevelopment.tsx'
import CloudSolutions from './pages/CloudSolutions.tsx'
import Blogs from './pages/Blogs.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/webdevelopment" element={<WebDevelopment />} />
          <Route path="/mobiledevelopment" element={<MobileDevelopment />} />
          <Route path="/cloudsolutions" element={<CloudSolutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/book-consultation" element={<BookFreeConsultation />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/faqs" element={<Faqs />} />
        </Routes>
      </App>
    </Router>
  </StrictMode>,
)
