import React from 'react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import { BookOpen, Code, Music, Users, Brain } from 'lucide-react'; // Removed Flask import
import { Calendar } from 'lucide-react'; // Ensure you import Calendar for resources

const Academics = () => {
  const departments = [
    {
      name: "Science",
      description: "Comprehensive programs in Physics, Chemistry, and Biology",
      icon: <BookOpen className="h-8 w-8 text-indigo-600" /> // Changed icon to BookOpen for example
    },
    {
      name: "Technology",
      description: "Modern computing, programming, and digital design",
      icon: <Code className="h-8 w-8 text-indigo-600" />
    },
    {
      name: "Arts",
      description: "Visual arts, music, drama, and creative expression",
      icon: <Music className="h-8 w-8 text-indigo-600" />
    }
  ];

  const programs = [
    {
      name: "Advanced Placement",
      description: "College-level courses for high-achieving students",
      icon: <Brain className="h-8 w-8 text-indigo-600" />
    },
    {
      name: "Special Education",
      description: "Individualized support for diverse learning needs",
      icon: <Users className="h-8 w-8 text-indigo-600" />
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Academics" 
        description="Excellence in Education"
        backgroundImage="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview */}
        <Card title="Academic Excellence" className="mb-12">
          <div className="flex items-start">
            <BookOpen className="h-8 w-8 text-indigo-600 mr-4 mt-1 flex-shrink-0" />
            <div className="space-y-4">
              <p className="text-gray-600">
                Our curriculum is designed to challenge and inspire students, fostering 
                critical thinking and creativity while maintaining high academic standards.
              </p>
              <p className="text-gray-600">
                With small class sizes and experienced faculty, we provide personalized 
                attention to help each student reach their full potential.
              </p>
            </div>
          </div>
        </Card>

        {/* Departments */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Academic Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="mb-4">{dept.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{dept.name}</h3>
                <p className="text-gray-600">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Programs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Special Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{program.name}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Academic Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="#" className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <BookOpen className="h-6 w-6 text-indigo-600 mr-3" />
              <div>
                <h3 className="font-medium">Course Catalog</h3>
                <p className="text-sm text-gray-500">Browse our comprehensive course offerings</p>
              </div>
            </a>
            <a href="#" className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <Calendar className="h-6 w-6 text-indigo-600 mr-3" />
              <div>
                <h3 className="font-medium">Academic Calendar</h3>
                <p className="text-sm text-gray-500">View important dates and deadlines</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
