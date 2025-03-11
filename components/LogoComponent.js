import React from 'react';

const LogoComponent = () => {
  return (
    <div className="absolute top-6 right-6 z-40 w-24 h-24 flex items-center justify-center">
      <img
        src="/images/alte uni.png"
        alt="Alte University Logo"
        className="max-h-full max-w-full object-contain drop-shadow-lg"
        style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.5))' }}
      />
    </div>
  );
};

export default LogoComponent;
