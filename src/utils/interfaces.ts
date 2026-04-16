export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
};

export interface ProjectItem {
  category: string;
  title: string;
  timeline: string;
  hasBorder?: boolean;
  description?: string;
  features?: string[];
  techStack?: string[];
  image?: string;
  link?: string;
};

export interface ExperienceItem {
  position: 'left' | 'right';
  title: string;
  company: string;
  description: string;
  timeline: string;
};


export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
};

export interface SocialLink {
  icon: string;
  href: string;
};

export interface FormField {
  label: string;
  name: string;
  type: 'text' | 'email' | 'textarea';
  placeholder: string;
  rows?: number;
}

export interface HeroButton {
  text: string;
  variant: 'primary' | 'secondary';
  href?: string;
}

export interface HeroData {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  buttons: HeroButton[];
  profileImage: {
    src: string;
    alt: string;
  };
}

export interface StatItem {
  title: string;
  value: string;
  description: string;
  variant: 'featured' | 'primary' | 'secondary' | 'icon';
  icon?: string;
  span?: string;
}

export interface ProjectRevealHeader {
  badge: string;
  title: string;
  cta: {
    text: string;
    href: string;
    icon: string;
  };
}

export interface SectionHeader {
  badge: string;
  title: string;
  description?: string;
}

export interface FooterLink {
  label: string;
  href: string;
  icon?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface UIStrings {
  skills: {
    header: SectionHeader;
    statistics: {
      categories: string;
      technologies: string;
    };
    filter: {
      all: string;
      results: string;
      noResults: {
        title: string;
        description: string;
      };
    };
    cta: {
      title: string;
      description: string;
      buttonText: string;
    };
    card: {
      technologiesLabel: string;
    };
  };
  projects: {
    header: SectionHeader;
    statistics: {
      completed: string;
    };
    results: string;
    noResults: {
      title: string;
      description: string;
    };
    cta: {
      title: string;
      description: string;
    };
    card: {
      features: string;
      techStack: string;
      viewProject: string;
    };
  };
}


export interface ExperienceItemProps {
  position: 'left' | 'right';
  title: string;
  company: string;
  description: string;
  timeline: string;
  index: number;
}
