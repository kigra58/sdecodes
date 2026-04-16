import { UI_STRINGS } from '../utils/constant';
import { getDescriptionColor, getIconColor, getTitleColor, getVariantClasses } from '../utils/helper';

interface SkillCardProps {
  title: string;
  description: string;
  icon: string;
  variant: 'default' | 'primary' | 'border-primary' | 'border-indigo' | 'border-slate';
  tags?: string[];
  gridSize?: { md: string; lg: string };
  category?: string;
}

const SkillCard = ({ title, description, icon, variant, tags, category }: SkillCardProps) => {
  

  const getTagClasses = () => {
    return variant === 'primary' 
      ? 'bg-on-primary/20 text-on-primary' 
      : 'bg-surface-container-high text-on-surface-variant border border-outline-variant/30';
  };

  return (
    <div className={`group ${getVariantClasses(variant)} p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 h-full flex flex-col justify-between`}>
      <div className="flex-1">
        {/* Icon and Title */}
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
            variant === 'primary' ? 'bg-on-primary/20' : 'bg-primary-container/20'
          }`}>
            <span className={`material-symbols-outlined text-2xl ${getIconColor(variant)}`}>{icon}</span>
          </div>
          <div className="flex-1">
            <h3 className={`font-headline text-xl font-bold ${getTitleColor(variant)} mb-1 group-hover:text-primary transition-colors duration-300`}>
              {title}
            </h3>
            {category && (
              <span className="text-xs text-on-surface-variant font-medium">
                {category}
              </span>
            )}
          </div>
        </div>
        
        {/* Description */}
        <p className={`${getDescriptionColor(variant)} text-sm leading-relaxed mb-6`}>
          {description}
        </p>
      </div>
      
      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className={`px-3 py-1 ${getTagClasses()} rounded-full text-xs font-medium transition-all duration-300 hover:scale-105`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-on-surface-variant">
              {tags.length} {UI_STRINGS.skills.card.technologiesLabel}
            </span>
            <span className="material-symbols-outlined text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              arrow_forward
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillCard;
