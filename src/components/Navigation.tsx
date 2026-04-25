import { NAVIGATION_ITEMS } from '../utils/constant';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="nav-fixed">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 w-full max-w-screen-2xl mx-auto">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-indigo-900">CURATED</Link>
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/leetcode"
            className={`nav-link ${isActive('/leetcode') ? 'active' : ''}`}
          >
            LeetCode
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-indigo-900 hover:opacity-80 transition-opacity duration-300">
            <span className="material-symbols-outlined">light_mode</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
