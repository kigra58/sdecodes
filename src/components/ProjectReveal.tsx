import ProjectItem from './ProjectItem';
import { MY_URLS, PROJECT_REVEAL_DATA, PROJECT_REVEAL_HEADER } from '../utils/constant';

const ProjectReveal = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mt-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Header section with enhanced animations */}
      <div className="relative z-10 flex justify-between items-end mb-8 group">
        <div className="transform transition-all duration-500 group-hover:scale-105">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] inline-block animate-fade-in-up">
            {PROJECT_REVEAL_HEADER.badge}
            <div className="h-0.5 bg-primary mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-on-surface to-primary bg-clip-text text-transparent animate-fade-in-up delay-200">
            {PROJECT_REVEAL_HEADER.title}
          </h2>
        </div>
        <a 
          className="text-primary font-semibold text-sm uppercase tracking-widest group flex items-center gap-2 px-6 py-3 rounded-full border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20" 
          href={PROJECT_REVEAL_HEADER.cta.href}
        >
          <span onClick={() => window.open(MY_URLS.LINKEDIN_URL,"_blank")} className="transition-transform duration-300 group-hover:translate-x-1">
            {PROJECT_REVEAL_HEADER.cta.text}
          </span>
          <span className="material-symbols-outlined transition-all duration-300 group-hover:translate-x-2 group-hover:rotate-45">
            {PROJECT_REVEAL_HEADER.cta.icon}
          </span>
        </a>
      </div>
      
      {/* Project list with staggered animations */}
      <div className="relative z-10 space-y-6">
        {PROJECT_REVEAL_DATA.map((project, index) => (
          <div
            key={index}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <ProjectItem
              category={project.category}
              title={project.title}
              timeline={project.timeline}
              hasBorder={project.hasBorder}
            />
          </div>
        ))}
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-2 h-2 bg-primary rounded-full animate-bounce" />
      <div className="absolute top-40 left-20 w-3 h-3 bg-secondary rounded-full animate-bounce delay-500" />
      <div className="absolute bottom-20 right-32 w-2 h-2 bg-primary rounded-full animate-bounce delay-1000" />
    </section>
  );
};

export default ProjectReveal;
