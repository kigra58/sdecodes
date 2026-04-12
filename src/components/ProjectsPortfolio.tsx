import { useState } from 'react';
import ProjectGrid from './ProjectGrid';
import { PROJECT_ITEMS } from '../utils/constant';

const ProjectsPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [searchTerm, setSearchTerm] = useState('');

  // Extract unique categories from projects
  const categories = ['All Projects', ...Array.from(new Set(PROJECT_ITEMS.map(p => p.category)))];

  // Filter projects based on active filter and search term
  const filteredProjects = PROJECT_ITEMS.filter(project => {
    const matchesFilter = activeFilter === 'All Projects' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.techStack?.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="py-20 px-6 md:px-12 max-w-screen-2xl mx-auto" id="projects">
      {/* Hero Section */}
      <header className="mb-16 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Portfolio</span>
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-6">
              Featured<br/>Projects.
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary-container rounded-full mb-6"></div>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
              A curated collection of full-stack applications and AI-powered solutions built with modern technologies and architectural best practices.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="text-center md:text-right">
              <div className="text-3xl font-bold text-primary mb-1">{PROJECT_ITEMS.length}</div>
              <div className="text-sm text-on-surface-variant">Completed Projects</div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-md mx-auto md:mx-0">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-surface-container-low border border-transparent rounded-lg px-4 py-3 pl-12 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-200"
          />
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
            search
          </span>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2.5 rounded-full font-label text-sm font-semibold tracking-wide transition-all duration-300 ${
              activeFilter === category
                ? 'bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-lg shadow-primary/20'
                : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest hover:shadow-md'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <div className="mb-8 text-center md:text-left">
        <p className="text-on-surface-variant">
          Showing <span className="font-semibold text-primary">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Project Grid */}
      <ProjectGrid projects={filteredProjects} />

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">search_off</span>
          <h3 className="text-xl font-semibold text-on-surface mb-2">No projects found</h3>
          <p className="text-on-surface-variant">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Footer Callout */}
      <div className="mt-20 text-center">
        <div className="bg-surface-container-low p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-on-surface mb-4">Interested in collaboration?</h3>
          <p className="text-on-surface-variant mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects. Let's build something amazing together.
          </p>
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 active:scale-95">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPortfolio;
