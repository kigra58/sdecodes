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