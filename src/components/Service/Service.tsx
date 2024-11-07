import React from "react";

const Service = () => {
  const services = [
    {
      icon: "💻",
      title: "Custom Software Development",
      description:
        "From concept to deployment, we develop customized software solutions tailored to meet the unique needs of your business. Our expert developers leverage the latest technologies to create applications that drive efficiency and growth.",
    },
    {
      icon: "☁️",
      title: "Cloud Solutions & Migration",
      description:
        "We provide end-to-end cloud solutions, helping you migrate, manage, and optimize your applications in the cloud. Our team ensures a seamless transition and ongoing support for a scalable and secure cloud environment.",
    },
    {
      icon: "🔐",
      title: "Cybersecurity & Compliance",
      description:
        "Protect your business with our advanced cybersecurity services. We help safeguard your data, identify potential threats, and ensure compliance with industry regulations, giving you peace of mind in an increasingly digital world.",
    },
    {
      icon: "📊",
      title: "Data Analytics & Business Intelligence",
      description:
        "Transform data into actionable insights with our analytics and BI solutions. We help you make data-driven decisions by analyzing patterns and trends, enabling you to stay competitive and make informed strategic moves.",
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description:
        "Expand your reach with customized mobile applications designed for both Android and iOS platforms. Our team creates intuitive, high-performing apps that enhance user engagement and deliver a seamless experience.",
    },
  ];

  return (
    <div className="px-4 lg:px-20 bg-pink-100 py-10">
      {/* Header Section */}
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-pink-700 mb-4">
        Our Relaiable Services
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-5xl mx-auto">
        We are dedicated to making your travel experiences unforgettable. Our
        range of travel services ensures that every aspect of your journey is
        planned to perfection, allowing you to focus on enjoying your trip and
        creating memories.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 bg-white hover:shadow-lg hover:translate-y-[-7px] p-6 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out"
          >
            {/* Icon Section */}
            <div className="text-4xl text-pink-600">{service.icon}</div>
            {/* Content Section */}
            <div>
              <h3 className="text-xl font-semibold text-pink-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
