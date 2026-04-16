import { ProjectItem } from '../utils/interfaces';

interface ProjectGridProps {
  projects: ProjectItem[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div 
          key={`${project.title}-${index}`}
          className="group opacity-0 animate-fade-in-up"
          style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
        >
          <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 h-full flex flex-col">
            {/* Project Image */}
            <div className="aspect-video overflow-hidden bg-surface-container-highest">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Project Content */}
            <div className="p-6 flex-1 flex flex-col">
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-primary-container/20 text-primary text-xs font-semibold rounded-full border border-primary/30">
                  {project.category}
                </span>
                <span className="text-xs text-on-surface-variant font-medium">
                  {project.timeline}
                </span>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              
              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-on-surface mb-2 uppercase tracking-wider">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-on-surface-variant flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Tech Stack */}
              {project.techStack && project.techStack.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-on-surface mb-2 uppercase tracking-wider">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 4).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-surface-container-high text-on-surface-variant text-xs rounded border border-outline-variant/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 bg-surface-container-high text-on-surface-variant text-xs rounded border border-outline-variant/30">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              )}
              
              {/* Action Button */}
              {/* <div className="mt-auto">
                <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-3 rounded-lg font-semibold text-sm tracking-wide hover:shadow-lg transition-all duration-300 active:scale-95 flex items-center justify-center gap-2">
                  <span>View Project</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
