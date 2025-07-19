import React from 'react';
import { Grid as Bridge, Droplets, Building, Route, Hammer, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bridge,
      title: 'Road and Bridge Design',
      description: 'Innovative engineering solutions for safe, efficient, and sustainable transportation infrastructure development.'
    },
    {
      icon: Droplets,
      title: 'Water & Wastewater Management',
      description: 'Comprehensive water treatment solutions ensuring safe and sustainable management of water resources.'
    },
    {
      icon: Building,
      title: 'Structural Engineering',
      description: 'Multi-storey residential, commercial, and industrial building design with advanced structural solutions.'
    },
    {
      icon: Route,
      title: 'Project Management',
      description: 'End-to-end project planning, execution, and control ensuring timely delivery within budget.'
    },
    {
      icon: Hammer,
      title: 'Construction Management',
      description: 'Professional construction oversight including planning, scheduling, cost management, and quality control.'
    },
    {
      icon: Users,
      title: 'Environmental Consulting',
      description: 'Sustainable development solutions with environmental impact assessment and management expertise.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive engineering solutions across multiple disciplines, delivering excellence in every project we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-red-700 mb-6 group-hover:text-red-800 transition-colors duration-300">
                <service.icon className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-red-700 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;