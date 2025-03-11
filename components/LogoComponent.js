import React from 'react';

const LogoComponent = () => {
  console.log("LogoComponent rendering"); // Add this for debugging
  
  return (
    <div className="absolute top-6 left-6 z-50 w-32 h-32 flex items-center justify-center bg-white p-2 rounded-lg">
      <img
        src="/images/alte uni.png"
        alt="Alte University Logo"
        className="max-h-full max-w-full object-contain"
        onError={(e) => {
          console.error("Error loading logo image");
          e.target.style.border = "2px solid red"; // Visual indicator of error
        }}
        onLoad={() => console.log("Logo image loaded successfully")}
      />
    </div>
  );
};

export default LogoComponent;
