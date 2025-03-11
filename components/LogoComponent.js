import React from 'react';

const LogoComponent = () => {
  return (
    <div className="absolute top-6 left-6 z-50 w-24 h-24 flex items-center justify-center">
      {/* Removed the bg-white and p-2 classes to eliminate the white background */}
      <img
        src="/images/alte uni.png"
        alt="Alte University Logo"
        className="max-h-full max-w-full object-contain"
        onError={(e) => {
          console.error("Error loading logo image");
          e.target.style.border = "2px solid red"; // Visual indicator of error
        }}
      />
    </div>
  );
};

export default LogoComponent;
