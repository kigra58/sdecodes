import { useState, useEffect } from 'react';
import { NAVIGATION_ITEMS, sections, THEME, BRAND_NAME } from '../../utils/constant';
import { useTheme } from '../../contexts/ThemeContext';

const Header = () => {
  const [activeSection, setActiveSection] = useState('about');
  const { theme, toggleTheme } = useTheme();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId.replace('#', ''));
    if (element) {
      const offset = 128; // Header height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
   
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="nav-fixed">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 w-full max-w-screen-2xl mx-auto">
        {BRAND_NAME!==null && <div className="text-2xl font-bold tracking-tighter" style={{ color: 'var(--primary)' }}>{BRAND_NAME}</div>}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION_ITEMS.map((item) => (
            <a 
              key={item.label}
              className={`nav-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="hover:opacity-80 transition-opacity duration-300"
            style={{ color: 'var(--primary)' }}
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined">
              {theme === THEME.LIGHT ? 'dark_mode' : 'light_mode'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
