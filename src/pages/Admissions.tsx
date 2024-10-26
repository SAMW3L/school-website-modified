import React from 'react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import { ClipboardList, DollarSign, Calendar, Download } from 'lucide-react';

const Admissions = () => {
  const admissionSteps = [
    {
      title: "Submit Application",
      description: "Complete the online application form with all required information.",
      icon: <ClipboardList className="h-8 w-8 text-indigo-600" />
    },
    {
      title: "Pay Application Fee",
      description: "Submit the non-refundable application processing fee.",
      icon: <DollarSign className="h-8 w-8 text-indigo-600" />
    },
    {
      title: "Schedule Interview",
      description: "Book an interview slot with our admissions team.",
      icon: <Calendar className="h-8 w-8 text-indigo-600" />
    }
  ];

  const documents = [
    {
      name: "Application Form",
      size: "245 KB",
      type: "PDF"
    },
    {
      name: "Financial Aid Form",
      size: "180 KB",
      type: "PDF"
    },
    {
      name: "Medical Form",
      size: "150 KB",
      type: "PDF"
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Admissions" 
        description="Join our community of learners"
        backgroundImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Admission Process */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <Card title="Required Documents" className="mb-12">
          <div className="space-y-4">
            {documents.map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Download className="h-5 w-5 text-indigo-600 mr-3" />
                  <div>
                    <h4 className="font-medium">{doc.name}</h4>
                    <p className="text-sm text-gray-500">{doc.size} • {doc.type}</p>
                  </div>
                </div>
                <button className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  Download
                </button>
              </div>
            ))}
          </div>
        </Card>

        {/* Apply Now CTA */}
        <div className="bg-indigo-700 rounded-lg shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Us?</h2>
          <p className="text-indigo-100 mb-6">
            Start your journey with Excellence Academy today.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admissions;