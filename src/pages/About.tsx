

const About = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          About HarIT Solutions
        </h1>
        
        <section className="my-8">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At HarIT Solutions, we are dedicated to delivering innovative IT solutions 
            that empower businesses to thrive in the digital age. Our commitment to 
            excellence and customer satisfaction drives everything we do.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
            <p className="text-gray-600">
              We constantly push the boundaries of technology to provide 
              cutting-edge solutions for our clients.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Expertise</h3>
            <p className="text-gray-600">
              Our team consists of skilled professionals with years of 
              experience in various IT domains.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Quality</h3>
            <p className="text-gray-600">
              We maintain the highest standards of quality in all our 
              deliverables and services.
            </p>
          </div>
        </div>

        <section className="my-8">
          <h2 className="text-3xl font-semibold mb-4">Our Journey</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded in 2023, HarIT Solutions has grown from a small startup to 
            a trusted technology partner for businesses across multiple industries. 
            Our journey is marked by continuous learning, adaptation, and growth.
          </p>
        </section>
      </div>
    </div>
  )
}

export default About