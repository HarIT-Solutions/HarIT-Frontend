import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
}

const Faqs: React.FC = () => {
  const [faqs, setFaqs] = useState<FaqItem[]>([
    {
      id: 1,
      question: "What services do you offer?",
      answer: "We offer a wide range of IT solutions including web development, mobile app development, cloud services, and IT consulting.",
      isOpen: false
    },
    {
      id: 2,
      question: "How can I get support?",
      answer: "You can reach our support team 24/7 through email, phone, or our live chat system on the website.",
      isOpen: false
    },
    {
      id: 3,
      question: "What are your working hours?",
      answer: "We operate Monday through Friday, 9:00 AM to 6:00 PM EST. However, our support team is available 24/7 for urgent matters.",
      isOpen: false
    },
    {
      id: 4,
      question: "Do you offer custom solutions?",
      answer: "Yes, we specialize in creating custom solutions tailored to meet your specific business needs and requirements.",
      isOpen: false
    }
  ]);

  const toggleFaq = (id: number) => {
    setFaqs(faqs.map(faq => 
      faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions
        </h1>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div 
              key={faq.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left"
                onClick={() => toggleFaq(faq.id)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {faq.isOpen ? (
                  <FiChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <FiChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {faq.isOpen && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
