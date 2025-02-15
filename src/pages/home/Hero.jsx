import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import bannerImg from "../../assets/banner.png";
import { FaRegCirclePlay } from "react-icons/fa6";

const Hero = () => {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false)
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-2xl container mx-auto py-20 px-6 flex flex-col lg:flex-row justify-between items-center ">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Creative Web-design for Business
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            growing with our sollution. Let's hep you take your Business to the
            next level!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 lg:justify-start">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md flex justify-center items-center space-x-2 hover:bg-blue-700">
              <span>Get Started</span>
              <FiArrowRight />
            </button>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md flex justify-center items-center space-x-2 hover:bg-blue-700">
              <span>Contact Us</span>
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-end relative rounded-lg">
          <div className="relative group">
            <img
              src={bannerImg}
              alt="banner image"
              className="rounded-lg shadow-lg hover:bg-gray-300"
            />
            <button onClick={openModal} className="absolute inset-0 flex items-center justify-center rounded-lg group-hover:opacity-75 transition z-0">
              <FaRegCirclePlay className="text-white text-5xl hover:text-blue-600" />
            </button>
          </div>
        </div> 
        {
          showModal &&(<div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg relative max-w-xl w-full">
            <button onClick={closeModal}>&times;</button>
            <iframe className="w-full aspect-video " width="560" height="315" src="https://www.youtube.com/embed/g7xkVEWrX8E?si=Jo0k0WUpdWG0Ob7j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>)
        } 
      </div>
    </div>
  );
};

export default Hero
