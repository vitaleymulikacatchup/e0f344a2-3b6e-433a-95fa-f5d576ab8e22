import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <p className="text-gray-600">
            What our clients say about working with us
          </p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl">💬</span>
            </div>
            <p className="text-gray-400 text-lg mb-8">
              Client testimonials will be displayed here once we have collected feedback from our projects.
            </p>
            <div className="text-sm text-gray-400">
              More testimonials coming soon...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;