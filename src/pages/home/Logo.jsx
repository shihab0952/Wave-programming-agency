import React from "react";
import Heading from "../../component/Heading";
import { FaAmazon, FaApple, FaFacebook, FaGoogle, FaMicrosoft } from "react-icons/fa6";

const Logo = () => {
  const logos = [
    { icon: FaApple, name: "Apple" },
    { icon: FaGoogle, name: "Google" },
    { icon: FaAmazon, name: "Amazon" },
    { icon: FaMicrosoft, name: "Microsoft" },
    { icon: FaFacebook, name: "Facebook" },
  ];

  return (
    <div className="bg-gray-200">
      <div className="max-w-screen container mx-auto py-20 px-5">
        <Heading
          heading="Companies We have worked with"
          subheading="Our Trusted Partners"
          description="We have partnered with some of the most innovative and leading companies to bring the best solutions to you."
        />

        {/* Logo Container */}
        <div className="relative overflow-hidden p-8">
          <div className="flex items-center justify-around md:space-x-14 space-x-8 animate-scroll">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="icon-container relative flex justify-center items-center bg-white rounded-full p-6 w-28 hover:scale-110 transition transform"
                data-name={logo.name}
              >
                <logo.icon className="text-blue-600 text-4xl" title={logo.name} />
                {/* Tooltip */}
                <span className="tooltip absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 transition-opacity duration-300">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;