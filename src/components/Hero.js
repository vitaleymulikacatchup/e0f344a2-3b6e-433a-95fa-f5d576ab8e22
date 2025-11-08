import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-brand-blue">AI-powered</span>
                <br />
                <span className="text-gray-900">web</span>
                <br />
                <span className="text-brand-blue">in 12 weeks</span>
              </h1>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <span>Powered by</span>
                <div className="flex items-center space-x-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">n</span>
                  </div>
                  <span className="font-semibold">n8n</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Start Discovery
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <span>📁</span>
                <span>Portfolio Showcase</span>
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-8">
              <span className="text-gray-500 text-sm">Follow us:</span>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <span className="text-gray-600">📧</span>
                </a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <span className="text-gray-600">💬</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Content - 3D Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="floating-3d">
                <img 
                  src="/images/3d-brain.png" 
                  alt="3D Brain Visualization" 
                  className="w-80 h-80 lg:w-96 lg:h-96 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Technology Stack */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <p className="text-gray-500">We work with cutting-edge technologies</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="tech-badge">#react</div>
            <div className="tech-badge">#nodejs</div>
            <div className="tech-badge">#yii2</div>
            <div className="tech-badge">#laravel</div>
            <div className="tech-badge">#wordpress</div>
            <div className="tech-badge">#eCommerce</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;