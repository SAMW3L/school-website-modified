import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import { BookOpen, Calendar, FileText, Bell, Lock } from 'lucide-react';

const ParentPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div>
        <PageHeader 
          title="Parent Portal" 
          description="Access your child's academic information"
          backgroundImage="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        />
        <div className="max-w-md mx-auto px-4 py-12">
          <Card title="Login to Parent Portal">
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
        title="Parent Portal" 
        description="Welcome back!"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card title="Academic Progress">
            <div className="flex items-start">
              <BookOpen className="h-6 w-6 text-indigo-600 mr-3" />
              <div>
                <p className="text-gray-600">View grades, attendance, and academic reports</p>
                <button className="mt-4 text-indigo-600 hover:text-indigo-500">View Details</button>
              </div>
            </div>
          </Card>

          <Card title="Calendar">
            <div className="flex items-start">
              <Calendar className="h-6 w-6 text-indigo-600 mr-3" />
              <div>
                <p className="text-gray-600">School events, assignments, and important dates</p>
                <button className="mt-4 text-indigo-600 hover:text-indigo-500">View Calendar</button>
              </div>
            </div>
          </Card>

          <Card title="Documents">
            <div className="flex items-start">
              <FileText className="h-6 w-6 text-indigo-600 mr-3" />
              <div>
                <p className="text-gray-600">Access school forms and documents</p>
                <button className="mt-4 text-indigo-600 hover:text-indigo-500">View Documents</button>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Updates */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Updates</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <Bell className="h-5 w-5 text-indigo-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Term Report Cards Available</h3>
                  <p className="text-sm text-gray-500">Posted 2 days ago</p>
                </div>
              </div>
              <div className="flex items-start">
                <Bell className="h-5 w-5 text-indigo-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Parent-Teacher Conference Schedule</h3>
                  <p className="text-sm text-gray-500">Posted 5 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentPortal;