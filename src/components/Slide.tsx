import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SlideProps {
  id: string;
  children: ReactNode;
  number: number;
}

const Slide: React.FC<SlideProps> = ({ id, children, number }) => {
  return (
    <section id={id} className="slide-container flex items-center justify-center px-8 md:px-16">
      <div className="geometric-shape shape-circle w-[500px] h-[500px] top-[-150px] right-[-200px]"></div>
      <div className="geometric-shape w-[400px] h-[400px] bottom-[-100px] left-[-150px] transform rotate-45"></div>
      
      <div className="relative z-10 max-w-7xl w-full">
        {children}
      </div>
      
      <div className="absolute bottom-6 right-8 text-lightGray opacity-50 font-normal text-base">
        {number.toString().padStart(2, '0')}
      </div>
    </section>
  );
};

export default Slide;
