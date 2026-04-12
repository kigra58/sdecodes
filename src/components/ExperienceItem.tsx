interface ExperienceItemProps {
  position: 'left' | 'right';
  title: string;
  company: string;
  description: string;
  timeline: string;
  index: number;
}

const ExperienceItem = ({ position, title, company, description, timeline, index }: ExperienceItemProps) => {
  const isLeft = position === 'left';
  
  const techStack = getTechStack(title);
  
  return (
    <div className={`relative group opacity-0 animate-fade-in-up`} style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}>
      <div className={`relative flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}>
        {/* Content Card */}
        <div className={`md:w-1/2 ${isLeft ? 'md:pr-16' : 'md:pl-16'} order-2 md:order-1`}>
          <div className={`bg-surface-container-low p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer ${isLeft ? 'md:text-right' : ''}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-container rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-xl">
                  {getRoleIcon(title)}
                </span>
              </div>
              <div className={isLeft ? 'md:ml-auto' : ''}>
                <h3 className="font-headline text-xl md:text-2xl font-bold text-on-surface">{title}</h3>
                <p className="text-primary font-semibold text-sm md:text-base">{company}</p>
              </div>
            </div>
            
            <p className={`text-on-surface-variant text-sm md:text-base leading-relaxed mb-4 ${isLeft ? 'md:ml-auto' : ''}`}>
              {description}
            </p>
            
            {techStack.length > 0 && (
              <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
                {techStack.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-primary-container/20 text-primary text-xs font-medium rounded-full border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Timeline Dot */}
        <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-gradient-to-br from-primary to-primary-container rounded-full -translate-x-1/2 border-4 border-surface z-10 shadow-lg group-hover:scale-125 transition-transform duration-300">
          <div className="absolute inset-1 bg-surface rounded-full"></div>
        </div>
        
        {/* Timeline */}
        <div className={`md:w-1/2 ${isLeft ? 'md:pl-16' : 'md:pr-16'} order-1 md:order-2`}>
          <div className={`bg-surface-container-highest p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${isLeft ? 'md:text-right' : ''}`}>
            <span className="font-headline text-2xl md:text-3xl font-black text-primary">
              {timeline}
            </span>
            <p className={`text-on-surface-variant text-xs md:text-sm mt-2 ${isLeft ? 'md:ml-auto' : ''}`}>
              {getDuration(timeline)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper functions
const getRoleIcon = (title: string): string => {
  if (title.includes('Senior')) return 'workspace_premium';
  if (title.includes('Full-Stack')) return 'layers';
  if (title.includes('Frontend')) return 'web';
  if (title.includes('Junior')) return 'rocket_launch';
  return 'work';
};

const getTechStack = (title: string): string[] => {
  const stacks: Record<string, string[]> = {
    'Senior Full-Stack Developer': ['Node.js', 'React', 'PostgreSQL', 'CI/CD', 'REST APIs'],
    'Full-Stack Engineer': ['Next.js', 'TypeScript', 'MongoDB', 'WebSocket', 'Redis'],
    'Frontend Developer': ['React', 'Vue.js', 'Redux', 'CSS3', 'JavaScript'],
    'Junior Web Developer': ['HTML5', 'CSS3', 'JavaScript', 'APIs', 'Git']
  };
  return stacks[title] || [];
};

const getDuration = (timeline: string): string => {
  if (timeline.includes('PRESENT')) {
    const year = parseInt(timeline.split(' - ')[0]);
    const currentYear = new Date().getFullYear();
    return `${currentYear - year + 1}+ years`;
  }
  const years = timeline.split(' - ');
  if (years.length === 2) {
    const duration = parseInt(years[1]) - parseInt(years[0]) + 1;
    return `${duration} years`;
  }
  return '';
};

export default ExperienceItem;
