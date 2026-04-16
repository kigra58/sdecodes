import { MY_URLS } from "./constant"

export const openMailBox=()=>{
    return  window.open("mailto:"+MY_URLS.EMAIL)
};


const calculatePresentDuration = (timeline: string): string => {
  const year = parseInt(timeline.split(' - ')[0]);
  const currentYear = new Date().getFullYear();
  return `${currentYear - year}+ years`;
};

const calculateYearRangeDuration = (timeline: string): string => {
  const years = timeline.split(' - ');
  if (years.length === 2) {
    const startYear = parseInt(years[0]);
    const endYear = parseInt(years[1]);
    
    if (startYear === endYear) {
      return '3 months';
    }
    
    const duration = endYear - startYear + 1;
    return duration === 1 ? '1 year' : `${duration} years`;
  }
  return '';
};

export const getDuration = (timeline: string): string => {
  if (timeline.includes('Present')) {
    return calculatePresentDuration(timeline);
  }
  return calculateYearRangeDuration(timeline);
};


export const getTechStack = (title: string): string[] => {
  const stacks: Record<string, string[]> = {
    'Senior Full-Stack Developer': ['Node.js', 'React', 'PostgreSQL', 'CI/CD', 'REST APIs'],
    'Full-Stack Engineer': ['Next.js', 'TypeScript', 'MongoDB', 'WebSocket', 'Redis'],
    'Frontend Developer': ['React', 'Vue.js', 'Redux', 'CSS3', 'JavaScript'],
    'Junior Web Developer': ['HTML5', 'CSS3', 'JavaScript', 'APIs', 'Git']
  };
  return stacks[title] || [];
};


export const getRoleIcon = (title: string): string => {
  if (title.includes('Senior')) return 'workspace_premium';
  if (title.includes('Full-Stack')) return 'layers';
  if (title.includes('Frontend')) return 'web';
  if (title.includes('Junior')) return 'rocket_launch';
  return 'work';
};

 export const getStatClasses = (variant: string, span?: string) => {
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


 export const getVariantClasses = (variant: string) => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-br from-primary to-primary-container text-on-primary';
      case 'border-primary':
        return 'bg-surface-container-low border-2 border-primary/30 hover:border-primary/50';
      case 'border-indigo':
        return 'bg-surface-container-low border-2 border-indigo-300/50 hover:border-indigo-300';
      case 'border-slate':
        return 'bg-surface-container-low border-2 border-slate-300/50 hover:border-slate-300';
      default:
        return 'bg-surface-container-low border-2 border-transparent hover:border-primary/30';
    }
  };

 export const getIconColor = (variant: string) => {
    switch (variant) {
      case 'primary':
        return 'text-on-primary';
      case 'border-indigo':
        return 'text-indigo-400';
      case 'border-slate':
        return 'text-slate-400';
      default:
        return 'text-primary';
    }
  };

 export const getTitleColor = (variant: string) => {
    return variant === 'primary' ? 'text-on-primary' : 'text-on-surface';
  };

 export const getDescriptionColor = (variant: string) => {
    return variant === 'primary' ? 'text-on-primary/80' : 'text-on-surface-variant';
  };