import React, { useState } from 'react';
import ProblemCard from './ProblemCard';

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

interface CategorySectionProps {
  category: Category;
  solvedProblems: Set<number>;
  onToggleSolved: (id: number) => void;
}

const CategorySection = ({ category, solvedProblems, onToggleSolved }: CategorySectionProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const solvedCount = category.problems.filter((p) => solvedProblems.has(p.id)).length;
  const easyCount = category.problems.filter((p) => p.difficulty === 'Easy').length;
  const mediumCount = category.problems.filter((p) => p.difficulty === 'Medium').length;
  const hardCount = category.problems.filter((p) => p.difficulty === 'Hard').length;

  return (
    <div className="mb-8">
      {/* Category Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full bg-surface-container-lowest rounded-xl p-6 hover:shadow-md transition-all duration-300 border border-outline-variant/20 hover:border-primary/30 group text-left"
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-headline font-bold text-on-surface mb-2">
              {category.name}
            </h2>
            <p className="text-on-surface-variant text-sm mb-4">{category.description}</p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-bold text-on-surface">{category.problems.length}</span>
                <span className="text-on-surface-variant">Problems</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-green-600">{solvedCount}</span>
                <span className="text-on-surface-variant">Solved</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="font-medium text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-950/60 px-2 py-1 rounded">{easyCount} Easy</span>
                <span className="font-medium text-yellow-700 dark:text-yellow-300 bg-yellow-100 dark:bg-yellow-950/60 px-2 py-1 rounded">{mediumCount} Med</span>
                <span className="font-medium text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-950/60 px-2 py-1 rounded">{hardCount} Hard</span>
              </div>
            </div>
          </div>

          <span
            className="material-symbols-outlined text-on-surface-variant transition-transform duration-300 ml-4 flex-shrink-0 text-2xl"
            style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            expand_more
          </span>
        </div>
      </button>

      {/* Problems List */}
      {isExpanded && (
        <div className="mt-5 space-y-4 animate-fade-in-up">
          {category.problems.map((problem) => (
            <ProblemCard
              key={problem.id}
              problem={problem}
              solved={solvedProblems.has(problem.id)}
              onToggleSolved={onToggleSolved}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(CategorySection);
