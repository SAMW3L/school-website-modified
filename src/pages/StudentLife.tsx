import React from 'react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import { Award, Users, Camera, Activity, Music, Book } from 'lucide-react';

const StudentLife = () => {
  const activities = [
    {
      title: "Sports Teams",
      description: "Basketball, Soccer, Swimming, Track & Field",
      icon: <Activity className="h-8 w-8 text-indigo-600" />
    },
    {
      title: "Arts & Culture",
      description: "Theater, Band, Choir, Visual Arts",
      icon: <Music className="h-8 w-8 text-indigo-600" />
    },
    {
      title: "Academic Clubs",
      description: "Debate, Robotics, Science Club",
      icon: <Book className="h-8 w-8 text-indigo-600" />
    }
  ];

  const gallery = [
    {
      title: "Sports Day 2024",
      image: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Science Fair",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Arts Festival",
      image: "https://images.unsplash.com/photo-1526285759904-71d1170ed2ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Student Life" 
        description="Discover life beyond the classroom"
        backgroundImage="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview */}
        <Card title="Life at Above Average Academy" className="mb-12">
          <div className="flex items-start">
            <Users className="h-8 w-8 text-indigo-600 mr-4 mt-1 flex-shrink-0" />
            <div className="space-y-4">
              <p className="text-gray-600">
                At Above Average Academy, we believe in nurturing well-rounded individuals. 
                Our diverse range of extracurricular activities, clubs, and programs 
                provide students with opportunities to explore their interests, develop 
                new skills, and build lasting friendships.
              </p>
            </div>
          </div>
        </Card>

        {/* Activities */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Activities & Clubs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="mb-4">{activity.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Camera className="h-8 w-8 mr-2" />
            Photo Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gallery.map((item, index) => (
              <div key={index} className="relative group">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Achievements */}
        <div className="bg-indigo-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Award className="h-6 w-6 mr-2" />
            Student Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-lg mb-2">Regional Science Fair Winners</h3>
              <p className="text-gray-600">Our students won first place in the Regional Science Fair Competition</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-lg mb-2">National Debate Champions</h3>
              <p className="text-gray-600">Excellence Academy Debate Team secured the national title</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLife;
