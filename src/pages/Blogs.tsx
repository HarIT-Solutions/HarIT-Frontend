import React, { useState, useEffect } from 'react';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Simulated blog data - replace this with actual API call
  const dummyBlogs: BlogPost[] = [
    {
      id: 1,
      title: "Getting Started with React",
      content: "React is a powerful library for building user interfaces...",
      author: "John Doe",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "TypeScript Best Practices",
      content: "TypeScript adds static typing to JavaScript...",
      author: "Jane Smith",
      date: "2024-01-14"
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchBlogs = async () => {
      try {
        setTimeout(() => {
          setBlogs(dummyBlogs);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto px-4 py-24 max-w-7xl">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Our Blog Posts
      </h1>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="text-xl text-gray-600">Loading...</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div 
              key={blog.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Optional Blog Image */}
              <div className="h-48 bg-gray-200">
                {/* Add your image here */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Blog Image
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h2>
                
                <p className="text-sm text-gray-600 mb-4">
                  By{' '}
                  <span className="font-medium">{blog.author}</span>
                  {' '}|{' '}
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                </p>

                <p className="text-gray-700 mb-4 line-clamp-3">
                  {blog.content}
                </p>

                <button className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
