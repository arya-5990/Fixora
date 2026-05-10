import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full border-b-[1px] border-black bg-white flex items-center justify-between px-6 py-4">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold uppercase tracking-tighter text-black">
          Fixora
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/providers" className="text-sm font-semibold tracking-widest uppercase border-[1px] border-black bg-white px-4 py-2 hover:bg-black hover:text-white transition-colors">
          Providers
        </Link>
        <Link to="/book" className="text-sm font-semibold tracking-widest uppercase border-[1px] border-black bg-white px-4 py-2 hover:bg-black hover:text-white transition-colors">
          Book
        </Link>
        <Link to="/admin" className="text-sm font-semibold tracking-widest uppercase border-[1px] border-black bg-black text-white px-4 py-2 hover:bg-accent transition-colors">
          Admin
        </Link>
        <Link to="/login" className="text-sm font-semibold tracking-widest uppercase border-[1px] border-black bg-white px-4 py-2 hover:bg-black hover:text-white transition-colors">
          Login / Join as Pro
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
