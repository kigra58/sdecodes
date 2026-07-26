import React, { useState, useMemo } from 'react';
import data from '../../data/leetcode.json';
import StatsSection from './StatsSection';
import FilterSection from './FilterSection';
import CategorySection from './CategorySection';

interface Problem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  solution: string;
  code: string;
  link: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  problems: Problem[];
}

const LeetcodePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string | null>(null);
  const [tagFilter, setTagFilter] = useState<string[]>([]);
  const [solvedProblems, setSolvedProblems] = useState<Set<number>>(new Set());

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    (data.categories as Category[]).forEach((category) => {
      category.problems.forEach((problem) => {
        problem.tags.forEach((tag) => tagSet.add(tag));
      });
    });
    return Array.from(tagSet).sort();
  }, []);

  // Filter problems based on search, difficulty, and tags
  const filteredCategories = useMemo(() => {
    return (data.categories as Category[]).map((category) => ({
      ...category,
      problems: category.problems.filter((problem) => {
        // Search filter
        const matchesSearch = problem.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

        // Difficulty filter
        const matchesDifficulty = !difficultyFilter || problem.difficulty === difficultyFilter;

        // Tags filter
        const matchesTags =
          tagFilter.length === 0 ||
          tagFilter.every((tag) => problem.tags.includes(tag));

        return matchesSearch && matchesDifficulty && matchesTags;
      }),
    }));
  }, [searchQuery, difficultyFilter, tagFilter]);

  // Calculate statistics
  const stats = useMemo(() => {
    let total = 0;
    let easy = 0;
    let medium = 0;
    let hard = 0;

    filteredCategories.forEach((category) => {
      category.problems.forEach((problem) => {
        total += 1;
        if (problem.difficulty === 'Easy') easy += 1;
        else if (problem.difficulty === 'Medium') medium += 1;
        else if (problem.difficulty === 'Hard') hard += 1;
      });
    });

    return { total, easy, medium, hard };
  }, [filteredCategories]);

  const handleToggleSolved = (id: number) => {
    const newSolved = new Set(solvedProblems);
    if (newSolved.has(id)) {
      newSolved.delete(id);
    } else {
      newSolved.add(id);
    }
    setSolvedProblems(newSolved);

    // Optional: Save to localStorage
    localStorage.setItem('leetcode-solved', JSON.stringify(Array.from(newSolved)));
  };

  // Load solved problems from localStorage on mount
  React.useEffect(() => {
    const saved = localStorage.getItem('leetcode-solved');
    if (saved) {
      try {
        setSolvedProblems(new Set(JSON.parse(saved)));
      } catch (e) {
        console.error('Failed to load solved problems', e);
      }
    }
  }, []);

  const hasProblems = filteredCategories.some((cat) => cat.problems.length > 0);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--surface)' }}>
      {/* Hero Section */}
      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">LeetCode Practice</span>
          </div>
          <h1 className="hero-title mb-3">Coding Problems</h1>
          <p className="hero-subtitle max-w-2xl">
            Master data structures, algorithms, and coding interview patterns with curated solutions and explanations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 md:px-8 lg:px-16 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Statistics */}
          <StatsSection
            total={stats.total}
            easy={stats.easy}
            medium={stats.medium}
            hard={stats.hard}
          />

          {/* Filters and Problems Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Sidebar Filters (Desktop) */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <FilterSection
                  onSearchChange={setSearchQuery}
                  onDifficultyFilter={setDifficultyFilter}
                  onTagFilter={setTagFilter}
                  availableTags={allTags}
                />
              </div>
            </div>

            {/* Problems Section */}
            <div className="lg:col-span-3">
              {hasProblems ? (
                <div>
                  {/* Mobile Filters (shown differently) */}
                  <div className="lg:hidden mb-6">
                    <FilterSection
                      onSearchChange={setSearchQuery}
                      onDifficultyFilter={setDifficultyFilter}
                      onTagFilter={setTagFilter}
                      availableTags={allTags}
                    />
                  </div>

                  {/* Categories */}
                  {filteredCategories.map((category) =>
                    category.problems.length > 0 ? (
                      <CategorySection
                        key={category.id}
                        category={category}
                        solvedProblems={solvedProblems}
                        onToggleSolved={handleToggleSolved}
                      />
                    ) : null
                  )}
                </div>
              ) : (
                <div className="bg-surface-container-lowest rounded-xl p-8 md:p-16 text-center border border-outline-variant/20">
                  <span className="material-symbols-outlined text-4xl md:text-5xl text-on-surface-variant opacity-40 block mb-4">
                    search
                  </span>
                  <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                    No Problems Found
                  </h3>
                  <p className="text-on-surface-variant">
                    Try adjusting your filters or search query to find problems.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeetcodePage;
