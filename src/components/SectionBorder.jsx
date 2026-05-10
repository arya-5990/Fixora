import React from 'react';

const SectionBorder = ({ children, className = '' }) => {
  return (
    <div className={`border-[1px] border-black ${className}`}>
      {children}
    </div>
  );
};

export default SectionBorder;
