const Reviews = [
  {
    content: "Outstanding service and exceptional results. Highly recommended!",
    author: "Sarah Wilson",
    company: "Tech Corp",
  },
  {
    content:
      "Their expertise helped transform our business processes completely.",
    author: "David Brown",
    company: "Innovation Labs",
  },
];

const ReviewCard = () => (
  <section className="container py-16 mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">Client Reviews</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {Reviews.map((review, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 
        hover:shadow-xl hover:transform hover:scale-105"
        >
          <div className="text-blue-600 mb-4">{review.content}</div>
          <h3 className="text-xl font-semibold mb-2">{review.author}</h3>
          <p className="text-gray-600">{review.company}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ReviewCard;
