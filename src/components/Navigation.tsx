import { NAVIGATION_ITEMS } from '../utils/constant';

const Navigation = () => {
  return (
    <nav className="nav-fixed">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 w-full max-w-screen-2xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter text-indigo-900">CURATED</div>
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION_ITEMS.map((item) => (
            <a 
              key={item.label}
              className={`nav-link ${item.isActive ? 'active' : ''}`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
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
