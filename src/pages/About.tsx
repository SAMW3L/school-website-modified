import React from 'react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import { Users, History, Target, Award } from 'lucide-react';

const About = () => {
  const staff = [
    {
      name: "Dr. Sarah Johnson",
      role: "Principal",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Prof. Michael Chen",
      role: "Vice Principal",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div>
      <PageHeader 
        title="About Above Average Academy" 
        description="Building tomorrow's leaders through excellence in education"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card title="Our Mission">
            <div className="flex items-start">
              <Target className="h-8 w-8 text-indigo-600 mr-4 mt-1" />
              <p className="text-gray-600">
                To provide exceptional education that nurtures intellectual curiosity, 
                fosters personal growth, and develops responsible global citizens who 
                are prepared to lead and serve in an ever-changing world.
              </p>
            </div>
          </Card>

          <Card title="Our Vision">
            <div className="flex items-start">
              <Award className="h-8 w-8 text-indigo-600 mr-4 mt-1" />
              <p className="text-gray-600">
                To be a leading educational institution recognized globally for academic 
                excellence, innovative teaching methods, and the development of well-rounded 
                individuals prepared for future success.
              </p>
            </div>
          </Card>
        </div>

        {/* History */}
        <Card title="Our History" className="mb-12">
          <div className="flex items-start">
            <History className="h-8 w-8 text-indigo-600 mr-4 mt-1 flex-shrink-0" />
            <div className="space-y-4">
              <p className="text-gray-600">
                Founded in 1970, Above Average Academy has grown from a small local school 
                to one of the region's most prestigious educational institutions.
              </p>
              <p className="text-gray-600">
                Over the past five decades, we have consistently evolved our educational 
                approach while maintaining our core values of academic excellence, 
                character development, and community service.
              </p>
            </div>
          </div>
        </Card>

        {/* Leadership Team */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
