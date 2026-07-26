import { contactInfo, socialLinks } from '../utils/constant';
import { openMailBox } from '../utils/helper';

const ContactInfo = () => {
  return (
    <div>
      <p onClick={openMailBox} className="text-primary font-semibold tracking-[0.2em] uppercase text-xs mb-4 cursor-pointer">Get in Touch</p>
      <h2 className="font-headline text-5xl font-extrabold tracking-tight text-on-surface mb-6">Let's build something curated.</h2>
      <p className="text-on-surface-variant text-lg mb-8 max-w-md">I'm currently available for freelance projects and full-time collaborations. Let's discuss your next digital exhibit.</p>
      <div className="space-y-6">
        {contactInfo.map((info) => (
          <div key={info.label} className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
              <span className="material-symbols-outlined">{info.icon}</span>
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{info.label}</p>
              <p className="text-on-surface font-semibold">{info.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex gap-4">
        {socialLinks.map((link, index) => (
          <a 
            key={index}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white hover:scale-110 transition-transform" 
            href={link.href}
          >
            <span className="material-symbols-outlined text-sm">{link.icon}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
