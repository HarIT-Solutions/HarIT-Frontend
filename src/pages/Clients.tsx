

// Define interfaces
interface Client {
  id: number;
  name: string;
  category: string;
  logo: string;
  description: string;
}

// Sample client data
const clientsData: Client[] = [
  {
    id: 1,
    name: "Tech Solutions Inc",
    category: "Technology",
    logo: "/images/client1.png",
    description: "Leading provider of innovative technology solutions"
  },
  {
    id: 2,
    name: "Healthcare Plus",
    category: "Healthcare",
    logo: "/images/client2.png",
    description: "Modern healthcare services and solutions"
  },
  // Add more clients as needed
];

// Get unique categories
const categories = [...new Set(clientsData.map(client => client.category))];

const Clients = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Valued Clients
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Discover the amazing companies we've had the pleasure to work with
        </p>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto mb-16">
        {categories.map((category) => (
          <div key={category} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {clientsData
                .filter(client => client.category === category)
                .map((client) => (
                  <div
                    key={client.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="p-6 bg-gray-50">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="h-32 w-full object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {client.name}
                      </h3>
                      <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full mb-3">
                        {client.category}
                      </span>
                      <p className="text-gray-600">
                        {client.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clients
