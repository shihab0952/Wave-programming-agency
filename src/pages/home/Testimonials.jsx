import React, { useState } from "react";
import blue from "../../assets/blue.webp";
import camp from "../../assets/camp.png";
import infinit from "../../assets/infinit.webp";
import tech from "../../assets/tech.jpg";
import whole from "../../assets/1.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// Array containing testimonial data with logos and text
const testimonials = [
  {
    img: blue,
    companyName: "Tech Solutions",
    text: "This is an amazing service! The product quality exceeded my expectations. The team was very professional and quick in responding to my queries. The end result was exactly what I had hoped for. Highly recommended for anyone looking for reliability and excellence.",
    name: "John Doe",
  },
  {
    img: camp,
    companyName: "Digital Innovations",
    text: "Highly recommended! The process was smooth and efficient, and the outcome was fantastic. I was particularly impressed by the customer service, which was available 24/7. I will definitely be coming back for more.",
    name: "Jane Smith",
  },
  {
    img: infinit,
    companyName: "Creative Minds",
    text: "Very satisfied with the quality! The team took the time to understand my needs and delivered a top-quality product that exceeded my expectations. I would highly recommend this service to others who want high standards.",
    name: "Michael Johnson",
  },
  {
    img: tech,
    companyName: "Innovative Solutions",
    text: "Outstanding experience! Everything from the initial consultation to the final product delivery was perfect. The customer support was fantastic, and they ensured everything was on time. I couldn’t be more pleased with the result.",
    name: "Emily Davis",
  },
  {
    img: whole,
    companyName: "Future Tech",
    text: "Will use this again for sure! The service was quick, reliable, and exceeded my expectations in terms of both quality and delivery time. I’ve already recommended it to several friends and colleagues.",
    name: "David Williams",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to go to the next testimonial
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to go to the previous testimonial
  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full sm:w-[800px] h-auto mx-auto relative flex flex-col items-center">
      <div className="w-full h-full">
        <div className="flex flex-col items-center hover:shadow-2xl">
          {/* Company Name */}
          <p className="text-xl font-semibold mb-2 text-center">
            {testimonials[activeIndex].companyName}
          </p>

          {/* Company Logo (Increased size and responsive) */}
          <div className="flex flex-col items-center mb-4">
            <img
              src={testimonials[activeIndex].img}
              alt="Company Logo"
              className="w-[100px] h-[60px] object-contain sm:w-[150px] sm:h-[100px]"
            />
          </div>

          {/* Review Text and Buttons */}
          <div className="flex items-center justify-between sm:gap-8 gap-4 mt-4 max-w-[700px] sm:flex-row flex-col">
            {/* Left Arrow Button */}
            <button
              onClick={prevTestimonial}
              className="bg-gray-700 text-white p-2 rounded-full transition hover:bg-gray-300 hover:text-2xl hover:text-gray-700"
              style={{ width: "50px", justifyContent: "center" }}
            >
              <FaArrowLeft />
            </button>

            {/* Review Text */}
            <p className="text-lg font-semibold text-center flex-1 sm:text-base sm:max-w-[600px]  px-4">
              {testimonials[activeIndex].text}
            </p>

            {/* Right Arrow Button */}
            <button
              onClick={nextTestimonial}
              className="bg-gray-700 text-white p-2 rounded-full transition hover:bg-gray-300 hover:text-2xl hover:text-gray-700"
              style={{ width: "50px", justifyContent: "center" }}
            >
              <FaArrowRight />
            </button>
          </div>

          {/* Reviewer's Initial */}
          <div className="mt-4 flex items-center justify-center">
            <span className="text-3xl font-bold text-gray-700 mr-2">
              {testimonials[activeIndex].name.charAt(0)}
            </span>
            <p className="text-sm font-medium">
              {testimonials[activeIndex].name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
