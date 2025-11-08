import React from 'react';
import { X } from 'lucide-react';

const CookieModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 cookie-modal flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          This site uses cookies
        </h3>
        
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          We and selected third parties use cookies (or similar technologies) for 
          technical purposes, to enhance and analyze site usage, to support our 
          marketing efforts, and for other purposes described below.
        </p>
        
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          By clicking "Accept all", you agree to the storing of cookies on your 
          device for these purposes.
        </p>
        
        <div className="flex space-x-3">
          <button 
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Deny
          </button>
          <button 
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;