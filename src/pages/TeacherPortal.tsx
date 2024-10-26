import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import { BookOpen, Users, FileText, Calendar, Bell } from 'lucide-react';

const TeacherPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div>
        <PageHeader 
          title="Teacher Portal" 
          description="Access your teaching resources"
          backgroundImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        />
        <div className="max-w-md mx-auto px-4 py-12">
          <Card title="Login to Teacher Portal">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Login
              </button>
            </form>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader 
        title="Teacher Portal" 
        description="Welcome back!"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card title="Class Management">
            <div className="flex items-start">
              <Users className="h-6 w-6 text-indigo-600 mr-3" />
              <div>
                <p className="text-gray-600">Manage attendance and grades</p>
                <button className="mt-4 text-indigo-600 hover:text-indigo-500">Access Classes</button>
              </div>
            </div>
          </Card>

          <Card title="Lesson Planning">
            <div className="flex items-start">
              <BookOpen className="h-6 w-6 text-indigo-600 mr-3" />
              <div>
                <p className="text-gray-600">Create and manage lesson plans</p>
                <button className="mt-4 text-indigo-600 hover:text-indigo-500">View Plans</button>
              </div>
            </div>
          </Card>

          <Card title="Resources">
            <div className="flex items-start">
              <FileText className="h-6 w-6 text-indigo-600 mr-3" />
              <div>
                <p className="text-gray-600">Access teaching materials and resources</p>
                <button className="mt-4 text-indigo-600 hover:text-indigo-500">Browse Resources</button>
              </div>
            </div>
          </Card>
        </div>

        {/* Calendar */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Today's Classes</h3>
              <Calendar className="h-5 w-5 text-indigo-600" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium">Mathematics - Grade 10</h4>
                  <p className="text-sm text-gray-500">Room 201</p>
                </div>
                <p className="text-sm font-medium">8:00 AM</p>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium">Physics - Grade 11</h4>
                  <p className="text-sm text-gray-500">Room 305</p>
                </div>
                <p className="text-sm font-medium">10:30 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherPortal;