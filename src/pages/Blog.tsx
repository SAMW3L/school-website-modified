import React from 'react';
import PageHeader from '../components/PageHeader';
import { Calendar, User, ChevronRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "Excellence Academy Wins Regional Science Competition",
      excerpt: "Our students showcased exceptional talent and innovation at the Regional Science Fair...",
      date: "March 15, 2024",
      author: "Sarah Johnson",
      category: "Academic Achievement",
      image: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "New STEM Lab Opening Ceremony",
      excerpt: "We're excited to announce the opening of our state-of-the-art STEM laboratory...",
      date: "March 10, 2024",
      author: "Michael Chen",
      category: "School News",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Annual Arts Festival Highlights",
      excerpt: "The Annual Arts Festival showcased the incredible artistic talents of our students...",
      date: "March 5, 2024",
      author: "Emily Rodriguez",
      category: "Events",
      image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div>
      <PageHeader 
        title="School News & Updates" 
        description="Stay informed about the latest happenings at Excellence Academy"
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-indigo-600 mb-2">{post.category}</div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <button className="mt-4 text-indigo-600 hover:text-indigo-500 flex items-center">
                  Read More
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 bg-indigo-50 rounded-lg p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">
              Stay updated with the latest news, events, and announcements from Excellence Academy.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;