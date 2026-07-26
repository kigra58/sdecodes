import React, { useState } from 'react';

interface FilterSectionProps {
  onSearchChange: (query: string) => void;
  onDifficultyFilter: (difficulty: string | null) => void;
  onTagFilter: (tags: string[]) => void;
  availableTags: string[];
}

const FilterSection = ({
  onSearchChange,
  onDifficultyFilter,
  onTagFilter,
  availableTags,
}: FilterSectionProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearchChange(value);
  };

  const handleDifficultyChange = (difficulty: string | null) => {
    setSelectedDifficulty(difficulty);
    onDifficultyFilter(difficulty);
  };

  const handleTagToggle = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newTags);
    onTagFilter(newTags);
  };

  const handleReset = () => {
    setSearchQuery('');
    setSelectedDifficulty(null);
    setSelectedTags([]);
    onSearchChange('');
    onDifficultyFilter(null);
    onTagFilter([]);
  };

  const FilterContent = () => (
    <div className="space-y-5">
      {/* Search */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant block mb-2">
          Search
        </label>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-on-surface-variant pointer-events-none">
            search
          </span>
          <input
            type="text"
            placeholder="Find problems..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg pl-10 pr-4 py-2.5 text-on-surface placeholder-on-surface-variant/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
          />
        </div>
      </div>

      {/* Difficulty Filter */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant block mb-2">
          Level
        </label>
        <div className="flex flex-wrap gap-2">
          {['Easy', 'Medium', 'Hard'].map((difficulty) => (
            <button
              key={difficulty}
              onClick={() =>
                handleDifficultyChange(selectedDifficulty === difficulty ? null : difficulty)
              }
              className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider transition-all ${
                selectedDifficulty === difficulty
                  ? difficulty === 'Easy'
                    ? 'bg-green-100 text-green-800 dark:bg-green-950/60 dark:text-green-300 shadow-sm'
                    : difficulty === 'Medium'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-950/60 dark:text-yellow-300 shadow-sm'
                      : 'bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300 shadow-sm'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high border border-outline-variant/20'
              }`}
            >
              {difficulty}
            </button>
          ))}
        </div>
      </div>

      {/* Tags Filter */}
      {availableTags.length > 0 && (
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant block mb-2">
            Tags
          </label>
          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all border ${
                  selectedTags.includes(tag)
                    ? 'bg-primary text-on-primary border-primary shadow-sm'
                    : 'bg-surface-container-lowest text-on-surface-variant border-outline-variant/20 hover:border-primary/50'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Reset Button */}
      {(searchQuery || selectedDifficulty || selectedTags.length > 0) && (
        <button
          onClick={handleReset}
          className="w-full px-3 py-2 bg-surface-container text-on-surface hover:bg-surface-container-high rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-outline-variant/20"
        >
          <span className="material-symbols-outlined text-sm">refresh</span>
          Reset
        </button>
      )}
    </div>
  );

  return (
    <div className="mb-8">
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setShowMobileFilters(!showMobileFilters)}
        className="md:hidden w-full px-4 py-3 bg-surface-container text-on-surface rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 mb-4 border border-outline-variant/20 hover:bg-surface-container-high transition-all"
      >
        <span className="material-symbols-outlined">tune</span>
        {showMobileFilters ? 'Hide' : 'Show'} Filters
      </button>

      {/* Desktop Filters */}
      <div className="hidden md:block">
        <h3 className="text-sm font-headline font-bold text-on-surface mb-4 uppercase tracking-wider">Filters</h3>
        <FilterContent />
      </div>

      {/* Mobile Filters */}
      {showMobileFilters && (
        <div className="md:hidden bg-surface-container-low rounded-lg p-4 mb-6 border border-outline-variant/20 animate-fade-in-up">
          <FilterContent />
        </div>
      )}
    </div>
  );
};

export default React.memo(FilterSection);
