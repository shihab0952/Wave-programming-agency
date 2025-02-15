import React from "react";
import Heading from "../../component/Heading";
import { FiActivity, FiCalendar, FiCompass, FiTruck } from "react-icons/fi";
const services = [
 {
    icon:FiCalendar,
    title:"Customizable setting",
    description:"Our passion lies in creating innovative, user-centric websites. We love transforming ideas into digital experiences that are visually engaging and functionally seamless, helping businesses grow and connect with their audience through creative design and technology."
 },
    
  {
    icon: FiCompass,
    title: "Devoloper Friendly",
    description:
      "Our agency is developer-friendly, focusing on seamless collaboration with developers. We provide clean, well-structured code and maintain flexibility, ensuring smooth integration and efficient project development while prioritizing quality and performance.",
  },

  {
    icon: FiActivity,
    title: "Responsive design",
    description:
      "Responsive design ensures a website adapts smoothly to various screen sizes, providing an optimal user experience on desktops, tablets, and mobile devices, enhancing accessibility and usability across all platforms.",
  },

  {
    icon: FiTruck,
    title: "Cloud intregration",
    description:
      "Cloud integration involves connecting web applications or services to cloud platforms, enabling seamless data storage, scalability, and remote access. It enhances collaboration, performance, and reliability, reducing infrastructure costs and improving flexibility.",
  },
];
const Services = () => {
  return (
    <div className="max-w-screen-2xl container bg-white mx-auto p-20 px-5">
      <Heading
        heading="Explore our range of proffessional services tailores to 
        meet our business need."
        subheading="Services"
        description="At our web design agency, we craft custom, visually appealing, 
and user-friendly websites that reflect your brand’s unique identity. Our team 
focuses on delivering responsive, high-performance sites that enhance user 
experience and drive business success. We offer services including web design,
 e-commerce solutions, branding, UX/UI design, and website redesigns. We are committed 
 to helping businesses thrive in the digital world by creating websites that are not only
  beautiful but also functional and optimized for growth."
      />

      {/* services container    */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-4/5 mx-auto mb-6 ">
    {
        services.map((services, index) =>(
            <div key={index} className="flex flex-col items-center p-6 hover:shadow-2xl hover:rounded-md transition cursor-pointer">
                <services.icon className="text-blue-600 text-4xl mb-4"/>
                <h2 className="font-semibold text-xl">{services.title}</h2>
                <p className="text-gray-600 mt-2 md:px-10">{services.description}</p>
            </div>
        ))
    }
    </div>
    </div>
  );
};

export default Services;
