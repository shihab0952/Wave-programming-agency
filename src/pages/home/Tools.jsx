import React from "react";
import { FiCloud, FiCode, FiSettings, FiSmartphone } from "react-icons/fi";
import Heading from "../../component/Heading";

const tools = [
  {
    icon: FiSettings,
    title: "Customizable Settings",
    description: "Easily configure tools to fit your project requirement.",
  },
  {
    icon: FiCode,
    title: "Efficient Coding",
    description: "Write clean and optimized code effortlessly.",
  },
  {
    icon: FiSmartphone,
    title: "Mobile Friendly",
    description: "Fully responsive tools for all devices.",
  },
  {
    icon: FiCloud,
    title: "Cloud Integration",
    description: "Sync your data securely with cloud services.",
  },
];

const Tools = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto py-20 px-5">
      {/* <div className='text-center mb-10'>
        <p className='text-blue-600 font-semibold uppercase'>The tools you need</p>
        <h2 className='text-3xl lg:text-4xl font-bold text-gray-800 mt-3'>All-in-one Solution for your projects</h2>
      </div> */}

      <Heading
        heading="All-in-One Solution for your Projects"
        subheading="The Tools You Need"
      />

      {/* Render Tools */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition cursor-pointer"
          >
            <tool.icon className="text-blue-400 text-4xl mb-4" />
            <h3 className="text-lg font-bold text-gray-800">{tool.title}</h3>
            <p className="text-gray-600 mt-2">{tool.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Tools;
