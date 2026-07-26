import { EXPERIENCE_ITEMS, EXPERIENCE_HEADER } from '../utils/constant';
import ExperienceItem from './ExperienceItem';

const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 max-w-screen-2xl mx-auto" id="experience">
      <div className="mb-20 text-center">
        <p className="text-primary font-semibold tracking-[0.2em] uppercase text-xs mb-4">{EXPERIENCE_HEADER.badge}</p>
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-6">
          {EXPERIENCE_HEADER.title}
        </h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary-container rounded-full mx-auto"></div>
        <p className="mt-6 text-on-surface-variant max-w-2xl mx-auto text-lg">
          {EXPERIENCE_HEADER.description}
        </p>
      </div>
      
      <div className="relative">
        {/* Enhanced Vertical Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent -translate-x-1/2 hidden md:block"></div>
        
        <div className="space-y-16 md:space-y-32">
          {EXPERIENCE_ITEMS.map((item, index) => (
            <ExperienceItem
              key={`${item.title}-${index}`}
              position={item.position}
              title={item.title}
              company={item.company}
              description={item.description}
              timeline={item.timeline}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
