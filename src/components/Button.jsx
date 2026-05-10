import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "text-sm font-semibold tracking-widest uppercase border-[1px] border-black px-6 py-3 transition-colors";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-black",
    secondary: "bg-black text-white hover:bg-white hover:text-black",
    outline: "bg-white text-black hover:bg-black hover:text-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
