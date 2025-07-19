import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const values = [
    'Respect the rights of all Clients and employees',
    'Never breach the confidentiality of a Client',
    'Respect the Client\'s expectation of a Professional service',
    'Operate in a non-discriminatory manner',
    'Strive to provide an excellent service at all times to Clients',
    'Promote transparency and zero tolerance to corruption',
    'Operate in a manner that will reflect our integrity and honesty'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Overview */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About ROBCON Engineers</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Established as a beacon of excellence in the Kenyan consulting engineering landscape, ROBCON Engineers and Associates Limited stands as a testament to professionalism, expertise, and unwavering commitment to delivering exceptional engineering, environmental, and project management services.
          </p>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Vision */}
          <div className="text-center">
            <div className="bg-red-700 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Eye className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become a local consulting company providing innovative and cost-effective engineering solutions with value addition to our client's business.
            </p>
          </div>

          {/* Mission */}
          <div className="text-center">
            <div className="bg-blue-700 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Target className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To contribute to the development of infrastructure, to create a sustainable future using leading edge techniques.
            </p>
          </div>

          {/* Values */}
          <div className="text-center">
            <div className="bg-green-700 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Values</h3>
            <p className="text-gray-600 leading-relaxed">
              We subscribe and commit ourselves to values of integrity, professionalism, transparency, and excellence in all our endeavors.
            </p>
          </div>
        </div>

        {/* Core Values List */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-700 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;