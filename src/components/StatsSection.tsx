import { STATS_DATA } from '../utils/constant';

const StatsSection = () => {
  const getStatClasses = (variant: string, span?: string) => {
    const baseClasses = "p-10 rounded-xl flex flex-col justify-center";
    
    switch (variant) {
      case 'featured':
        return `${baseClasses} justify-between group hover:shadow-md transition-shadow duration-300 border border-outline-variant/10 bg-surface-container-lowest shadow-sm ${span || ''}`;
      case 'primary':
        return `${baseClasses} items-center text-center bg-primary text-on-primary`;
      case 'icon':
        return `${baseClasses} items-center text-center bg-surface-container-high`;
      default:
        return baseClasses;
    }
  };

  const renderStatContent = (stat: any) => {
    if (stat.variant === 'featured') {
      return (
        <>
          <h3 className="text-3xl font-bold text-primary mb-12 leading-tight">{stat.title}</h3>
          <div className="flex items-center gap-4">
            <span className="text-5xl font-extrabold text-primary-container">{stat.value}</span>
            <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-widest">{stat.description}</p>
          </div>
        </>
      );
    }
    
    if (stat.variant === 'primary') {
      return (
        <>
          <span className="text-4xl font-bold mb-2">{stat.value}</span>
          <p className="text-sm font-medium opacity-80 uppercase tracking-widest">{stat.description}</p>
        </>
      );
    }
    
    if (stat.variant === 'icon') {
      return (
        <>
          <span className="material-symbols-outlined text-4xl text-primary mb-4">{stat.icon}</span>
          <p className="text-sm font-bold text-primary uppercase tracking-widest leading-tight">{stat.description}</p>
        </>
      );
    }
    
    return null;
  };

  return (
    <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mt-32">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {STATS_DATA.map((stat, index) => (
          <div key={index} className={getStatClasses(stat.variant, stat.span)}>
            {renderStatContent(stat)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
