import React from 'react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import { 
  Briefcase, 
  GraduationCap, 
  Clock, 
  MapPin, 
  Users, 
  Award 
} from 'lucide-react';

const Careers = () => {
  const jobs = [
    {
      title: "Mathematics Teacher",
      department: "Secondary Education",
      type: "Full-time",
      location: "Main Campus",
      description: "Seeking an experienced Mathematics teacher for high school level courses..."
    },
    {
      title: "Science Lab Coordinator",
      department: "Science Department",
      type: "Full-time",
      location: "Main Campus",
      description: "Managing laboratory resources and supporting science faculty..."
    },
    {
      title: "School Counselor",
      department: "Student Services",
      type: "Full-time",
      location: "Main Campus",
      description: "Providing academic and personal counseling to students..."
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Careers" 
        description="Join our team of dedicated educators"
        backgroundImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Why Work With Us */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card title="Professional Growth">
              <div className="flex items-start">
                <GraduationCap className="h-6 w-6 text-indigo-600 mr-3" />
                <p className="text-gray-600">
                  Continuous learning and development opportunities through workshops and training programs
                </p>
              </div>
            </Card>
            <Card title="Supportive Environment">
              <div className="flex items-start">
                <Users className="h-6 w-6 text-indigo-600 mr-3" />
                <p className="text-gray-600">
                  Collaborative community of educators dedicated to student success
                </p>
              </div>
            </Card>
            <Card title="Competitive Benefits">
              <div className="flex items-start">
                <Award className="h-6 w-6 text-indigo-600 mr-3" />
                <p className="text-gray-600">
                  Comprehensive benefits package including health insurance and retirement plans
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Current Openings */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Openings</h2>
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Briefcase className="h-5 w-5 mr-2" />
                        {job.department}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-5 w-5 mr-2" />
                        {job.type}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-5 w-5 mr-2" />
                        {job.location}
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600">{job.description}</p>
                  </div>
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mt-12 bg-indigo-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-2">Submit Application</h3>
                <p className="text-gray-600">Complete the online application form with your credentials</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-2">Initial Review</h3>
                <p className="text-gray-600">Our HR team will review your application</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-2">Interview Process</h3>
                <p className="text-gray-600">Selected candidates will be invited for interviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;