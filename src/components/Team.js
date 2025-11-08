import React from 'react';

const Team = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sargas Team
          </h2>
          <p className="text-gray-600">
            Meet the talented individuals behind our success
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl">👥</span>
            </div>
            <p className="text-gray-400 text-lg mb-8">
              Our team profiles and information will be showcased here.
            </p>
            <div className="text-sm text-gray-400">
              Team section coming soon...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;