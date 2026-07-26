interface ProjectItemProps {
  category: string;
  title: string;
  timeline: string;
  hasBorder?: boolean;
}

const ProjectItem = ({ category, title, timeline, hasBorder = true }: ProjectItemProps) => {
  return (
    <div className={`group relative flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:px-8 md:py-6 rounded-xl border border-outline-variant/20 hover:border-primary/30 hover:bg-surface-container-highest transition-all duration-500 cursor-pointer transform hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 ${
      hasBorder ? 'border-b border-outline-variant/10 md:border-b-0' : ''
    }`}>
      {/* Decorative gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col">
        <span className="text-on-surface-variant text-xs font-medium uppercase tracking-widest mb-2 transition-all duration-300 group-hover:text-primary group-hover:tracking-wider">
          {category}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-on-surface transition-all duration-300 group-hover:text-primary group-hover:translate-x-2">
          {title}
        </h3>
      </div>
      
      <div className="relative z-10 mt-4 md:mt-0 flex flex-col items-start md:items-end gap-2">
        <span className="text-on-surface-variant text-sm font-medium transition-all duration-300 group-hover:text-primary">
          {timeline}
        </span>
        {/* <div className="flex items-center gap-2">
          <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 text-primary text-lg">
            north_east
          </span>
          <span className="text-primary text-xs font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            View Project
          </span>
        </div> */}
      </div>
      
      {/* Subtle border animation */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
};

export default ProjectItem;
