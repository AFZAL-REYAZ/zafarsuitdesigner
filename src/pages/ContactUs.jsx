import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // 👉 here you can send form data to backend or email service
    alert("Thank you for contacting us!");
  };

  return (
    <section className="relative bg-gray-50 py-16 px-6 md:px-12 mt-24">
      {/* Background */}
      {/* <div className="absolute inset-0">
        <img
          src="/assets/contact-bg.jpg" // change to your background image
          alt="Contact background"
          className="w-full h-full object-cover opacity-70"
        />
      </div> */}

      <div className="relative max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-8">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-8">Contact Us</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border-b border-gray-400 bg-transparent focus:outline-none focus:border-black py-2"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border-b border-gray-400 bg-transparent focus:outline-none focus:border-black py-2"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 text-gray-700">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-b border-gray-400 bg-transparent focus:outline-none focus:border-black py-2"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="border-b border-gray-400 bg-transparent focus:outline-none focus:border-black py-2"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 border rounded-md text-lg font-medium text-black hover:bg-black hover:text-white transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
