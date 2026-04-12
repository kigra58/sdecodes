interface ProjectCardProps {
  type: 'featured' | 'side' | 'small';
  title: string;
  description: string;
  category: string;
  year?: string;
  image: string;
  tags?: string[];
  buttons?: Array<{ text: string; variant: 'primary' | 'secondary'; icon?: string }>;
  icons?: Array<{ name: string; label?: string }>;
}

const ProjectCard = ({ type, title, description, category, year, image, tags, buttons, icons }: ProjectCardProps) => {
  const renderFeaturedProject = () => (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden snappy-soft-300ms-ease-out hover:shadow-2xl hover:shadow-indigo-900/5 relative">
      <div className="aspect-[16/9] w-full overflow-hidden bg-surface-container-low">
        <img 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 snappy-soft-300ms-ease-out" 
          src={image}
        />
      </div>
      <div className="p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex gap-2 mb-3">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded">{category}</span>
            {year && <span className="text-[10px] font-bold uppercase tracking-widest bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded">{year}</span>}
          </div>
          <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">{title}</h3>
          <p className="text-on-surface-variant font-body text-sm mb-4 max-w-md">{description}</p>
          {tags && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="font-label text-xs text-on-surface-variant bg-surface-container py-1 px-3 rounded-full">{tag}</span>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          {buttons?.map((button, index) => (
            <button 
              key={index}
              className={`${button.variant === 'primary' ? 'hero-gradient text-on-primary' : 'bg-surface-container-highest text-on-surface'} px-6 py-3 rounded-lg font-label text-sm font-bold flex items-center justify-center gap-2 ${button.variant === 'primary' ? 'group/btn' : ''}`}
            >
              {button.text}
              {button.icon && (
                <span className={`material-symbols-outlined text-sm ${button.variant === 'primary' ? 'group-hover/btn:translate-x-1 transition-transform' : ''}`}>
                  {button.icon}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSideProject = () => (
    <div className="h-full bg-surface-container-lowest rounded-xl overflow-hidden snappy-soft-300ms-ease-out hover:shadow-2xl hover:shadow-indigo-900/5 flex flex-col">
      <div className="aspect-[3/4] w-full overflow-hidden bg-surface-container-low">
        <img 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 snappy-soft-300ms-ease-out" 
          src={image}
        />
      </div>
      <div className="p-8 flex-grow flex flex-col">
        <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">{category}</span>
        <h3 className="font-headline text-2xl font-bold text-on-surface mb-3">{title}</h3>
        <p className="text-on-surface-variant font-body text-sm mb-6 line-clamp-3">{description}</p>
        <div className="mt-auto pt-6 border-t border-surface-container flex justify-between items-center">
          {icons && (
            <div className="flex -space-x-2">
              {icons.map((icon, index) => (
                <div key={index} className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center border-2 border-surface-container-lowest">
                  <span className="material-symbols-outlined text-xs">{icon.name}</span>
                </div>
              ))}
            </div>
          )}
          <a className="text-primary font-bold text-sm flex items-center gap-1 hover:underline underline-offset-4" href="#">
            Full Case Study <span className="material-symbols-outlined text-sm">chevron_right</span>
          </a>
        </div>
      </div>
    </div>
  );

  const renderSmallProject = () => (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden snappy-soft-300ms-ease-out hover:shadow-2xl hover:shadow-indigo-900/5">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 snappy-soft-300ms-ease-out" 
          src={image}
        />
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-headline text-xl font-bold text-on-surface">{title}</h3>
            <p className="text-on-surface-variant text-sm font-body">{description}</p>
          </div>
          {icons && icons[0] && (
            <span className="material-symbols-outlined text-on-surface-variant">{icons[0].name}</span>
          )}
        </div>
        <div className="flex gap-3">
          {buttons?.map((button, index) => (
            <button 
              key={index}
              className={`${button.variant === 'primary' ? 'bg-primary/5 text-primary hover:bg-primary/10' : 'bg-surface-container-highest text-on-surface hover:opacity-80'} px-4 py-2 rounded font-label text-xs font-bold transition-colors`}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className={`group ${type === 'featured' ? 'md:col-span-8' : type === 'side' ? 'md:col-span-4' : 'md:col-span-6'}`}>
      {type === 'featured' && renderFeaturedProject()}
      {type === 'side' && renderSideProject()}
      {type === 'small' && renderSmallProject()}
    </div>
  );
};

export default ProjectCard;
