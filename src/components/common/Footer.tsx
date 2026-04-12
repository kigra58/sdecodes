import { BRAND_NAME, FOOTER_SECTIONS, FOOTER_SOCIAL_LINKS } from '../../utils/constant';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-16 px-6 md:px-12 mt-20" style={{ backgroundColor: 'var(--surface-container-lowest)', borderTop: '1px solid var(--outline-variant)' }}>
      <div className="max-w-screen-2xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4" style={{ color: 'var(--on-surface)' }}>
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 transition-colors duration-200 hover:underline"
                      style={{ color: 'var(--on-surface-variant)' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--on-surface-variant)'}
                    >
                      {link.icon && (
                        <span className="material-symbols-outlined text-sm">
                          {link.icon}
                        </span>
                      )}
                      <span className="text-sm">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t pt-8" style={{ borderColor: 'var(--outline-variant)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex gap-4">
              {FOOTER_SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ 
                    backgroundColor: 'var(--surface-container-high)',
                    color: 'var(--on-surface-variant)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary)';
                    e.currentTarget.style.color = 'var(--on-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--surface-container-high)';
                    e.currentTarget.style.color = 'var(--on-surface-variant)';
                  }}
                  aria-label={social.label}
                >
                  <span className="material-symbols-outlined text-sm">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-xs tracking-wide uppercase" style={{ color: 'var(--on-surface-variant)' }}>
              © {currentYear} {BRAND_NAME}. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
