import React from 'react';

const CaseStudies = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
          <p className="text-gray-600">
            Discover how we've helped businesses transform their digital presence
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Case Study */}
          <div className="case-study-card">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Dios</h3>
              <p className="text-blue-100 mb-4">
                A comprehensive e-commerce platform built with modern technologies, 
                featuring advanced inventory management and seamless user experience.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="bg-white/20 px-3 py-1 rounded-full">E-commerce</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">React</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">Node.js</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex space-x-6 text-sm">
                <div>
                  <div className="font-bold text-lg">$2,500</div>
                  <div className="text-blue-100">Project Value</div>
                </div>
                <div>
                  <div className="font-bold text-lg">120</div>
                  <div className="text-blue-100">Days</div>
                </div>
              </div>
              
              <div className="w-32 h-20 bg-white/10 rounded-lg flex items-center justify-center">
                <img 
                  src="/images/dios-preview.png" 
                  alt="Dios Project Preview" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/10 rounded-full"></div>
          </div>
          
          {/* Additional case studies placeholder */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-6 h-48 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-lg font-medium mb-2">More Case Studies</div>
                <div className="text-sm">Coming Soon</div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 h-48 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-lg font-medium mb-2">Featured Project</div>
                <div className="text-sm">In Development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;