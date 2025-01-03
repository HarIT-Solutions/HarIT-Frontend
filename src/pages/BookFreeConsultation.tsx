import React, { useState, FormEvent } from 'react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  preferredDate: string;
  message: string;
}

const BookFreeConsultation = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    preferredDate: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a preferred date';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission here
      console.log(formData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
          Book a Free Consultation
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Company Name</label>
              <input
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
          </div>

          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700">Preferred Date</label>
            <input
              type="datetime-local"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            {errors.preferredDate && <p className="mt-1 text-sm text-red-500">{errors.preferredDate}</p>}
          </div>

          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none h-32"
              placeholder="Tell us about your project or requirements..."
            />
          </div>

          <div className="flex justify-center sm:justify-end mt-6">
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Book Consultation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookFreeConsultation;