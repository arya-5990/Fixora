// src/components/Navbar.jsx

import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { logout } from '../firebase/auth';

export default function Navbar() {
  const { user } = useAuth();
  const navigate  = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="font-display text-xl font-bold gradient-text">
          Fixora
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <Link to="/"        className="hover:text-white transition-colors">Home</Link>
          <Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
        </div>

        {/* Auth actions */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="hidden sm:block text-sm text-white/60 truncate max-w-[180px]">
                {user.displayName || user.email}
              </span>
              <button onClick={handleLogout} className="btn-secondary text-sm py-1.5 px-4">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login"    className="btn-secondary text-sm py-1.5 px-4">Login</Link>
              <Link to="/register" className="btn-primary  text-sm py-1.5 px-4">Sign Up</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
