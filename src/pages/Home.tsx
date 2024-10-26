import React from 'react';
import { Calendar, Bell, Users, BookOpen } from 'lucide-react';

const Home = () => {
  const announcements = [
    {
      title: "2024-25 Admissions Now Open",
      date: "March 15, 2024",
      content: "Applications for the upcoming academic year are now being accepted..."
    },
    {
      title: "Science Fair Winners Announced",
      date: "March 10, 2024",
      content: "Congratulations to all participants in this year's Science Fair..."
    }
  ];

  const events = [
    {
      title: "Parent-Teacher Conference",
      date: "March 25, 2024",
      time: "2:00 PM - 6:00 PM"
    },
    {
      title: "Sports Day",
      date: "April 5, 2024",
      time: "9:00 AM - 4:00 PM"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="School campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Above Average Academy
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Nurturing minds, Building futures
            </p>
            <div className="space-x-4">
              <a
                href="/admissions"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Apply Now
              </a>
              <a
                href="/about"
                className="bg-white hover:bg-green-10 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <QuickLinkCard
              icon={<BookOpen className="h-8 w-8" />}
              title="Academics"
              description="Explore our comprehensive curriculum"
              link="/academics"
            />
            <QuickLinkCard
              icon={<Calendar className="h-8 w-8" />}
              title="Calendar"
              description="View upcoming events and schedules"
              link="/calendar"
            />
            <QuickLinkCard
              icon={<Bell className="h-8 w-8" />}
              title="Announcements"
              description="Stay updated with school news"
              link="/announcements"
            />
            <QuickLinkCard
              icon={<Users className="h-8 w-8" />}
              title="Parent Portal"
              description="Access grades and resources"
              link="/parent-portal"
            />
          </div>
        </div>
      </div>

      {/* Announcements & Events Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Announcements */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Latest Announcements</h2>
              <div className="space-y-4">
                {announcements.map((announcement, index) => (
                  <div key={index} className="border-b pb-4">
                    <h3 className="font-semibold text-lg">{announcement.title}</h3>
                    <p className="text-sm text-gray-500">{announcement.date}</p>
                    <p className="mt-2">{announcement.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Events Calendar */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="border-b pb-4">
                    <h3 className="font-semibold text-lg">{event.title}</h3>
                    <p className="text-sm text-gray-500">{event.date}</p>
                    <p className="text-sm text-gray-500">{event.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuickLinkCard = ({ icon, title, description, link }) => (
  <a
    href={link}
    className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="text-indigo-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </a>
);

export default Home;