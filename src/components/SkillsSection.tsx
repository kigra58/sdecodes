import { useState } from 'react';
import { SKILLS_DATA, UI_STRINGS } from '../utils/constant';
import SkillCard from './SkillCard';

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Extract unique categories
  const categories = ['all', ...Array.from(new Set(SKILLS_DATA.map(s => s.category)))];

  // Filter skills based on selected category
  const filteredSkills = selectedCategory === 'all' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(skill => skill.category === selectedCategory);

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      'all': 'All Skills',
      'core': 'Languages',
      'frontend': 'Frontend',
      'backend': 'Backend',
      'database': 'Database',
      'devops': 'DevOps & Cloud',
      'ai': 'AI / ML'
    };
    return labels[category] || category;
  };

  const totalSkills = SKILLS_DATA.reduce((acc, skill) => acc + skill.tags.length, 0);

  return (
    <section className="bg-surface-container-low py-20 px-6 md:px-12" id="skills">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4 block">{UI_STRINGS.skills.header.badge}</span>
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-6">
            {UI_STRINGS.skills.header.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary-container rounded-full mx-auto mb-6"></div>
          <p className="text-on-surface-variant text-lg max-w-3xl mx-auto leading-relaxed">
            {UI_STRINGS.skills.header.description}
          </p>
          
          {/* Skills Statistics */}
          <div className="mt-8 flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">{SKILLS_DATA.length}</div>
              <div className="text-sm text-on-surface-variant">{UI_STRINGS.skills.statistics.categories}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">{totalSkills}</div>
              <div className="text-sm text-on-surface-variant">{UI_STRINGS.skills.statistics.technologies}</div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-label text-sm font-semibold tracking-wide transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-lg shadow-primary/20'
                    : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest hover:shadow-md'
                }`}
              >
                {getCategoryLabel(category)}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 text-center">
          <p className="text-on-surface-variant">
            {UI_STRINGS.skills.filter.results} <span className="font-semibold text-primary">{filteredSkills.length}</span> skill{filteredSkills.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <div 
              key={`${skill.title}-${index}`}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <SkillCard {...skill} />
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-16">
            <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">search_off</span>
            <h3 className="text-xl font-semibold text-on-surface mb-2">{UI_STRINGS.skills.filter.noResults.title}</h3>
            <p className="text-on-surface-variant">{UI_STRINGS.skills.filter.noResults.description}</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-surface-container-highest p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-on-surface mb-4">{UI_STRINGS.skills.cta.title}</h3>
            <p className="text-on-surface-variant mb-6 max-w-2xl mx-auto">
              {UI_STRINGS.skills.cta.description}
            </p>
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 active:scale-95">
              {UI_STRINGS.skills.cta.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
