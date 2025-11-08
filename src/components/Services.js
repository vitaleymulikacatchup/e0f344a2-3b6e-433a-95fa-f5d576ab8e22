import React from 'react';

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore our services
          </h2>
        </div>
        
        <div className="space-y-20">
          {/* Web Development */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Web Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We create modern, responsive websites and web applications using the latest technologies. 
                Our team specializes in React, Node.js, and other cutting-edge frameworks to deliver 
                exceptional user experiences.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">React</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">TypeScript</span>
                <span className="tech-badge">Next.js</span>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/images/web-development.png" 
                alt="Web Development Illustration" 
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
          
          {/* Mobile Development */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                MOBILE DEVELOPMENT
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Native and cross-platform mobile applications that provide seamless user experiences 
                across iOS and Android devices. We use React Native and Flutter for efficient 
                cross-platform development.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge">React Native</span>
                <span className="tech-badge">Flutter</span>
                <span className="tech-badge">iOS</span>
                <span className="tech-badge">Android</span>
              </div>
            </div>
            <div className="lg:order-1 flex justify-center">
              <img 
                src="/images/mobile-development.png" 
                alt="Mobile Development Illustration" 
                className="w-full max-w-sm h-auto"
              />
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 text-center shadow-sm">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Get the same high-quality service for a smaller task
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you need a simple landing page or a complex web application, 
              we deliver the same level of excellence for projects of any size.
            </p>
            <button className="btn-primary">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;