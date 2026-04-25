import React, { useState } from 'react';

interface Problem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  solution: string;
  code: string;
  link: string;
}

interface ProblemCardProps {
  problem: Problem;
  solved?: boolean;
  onToggleSolved?: (id: number) => void;
}

const getDifficultyStyles = (difficulty: string) => {
  switch (difficulty) {
    case 'Easy':
      return 'bg-green-100 text-green-800 dark:bg-green-950/60 dark:text-green-300';
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-950/60 dark:text-yellow-300';
    case 'Hard':
      return 'bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const ProblemCard = ({ problem, solved = false, onToggleSolved }: ProblemCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-outline-variant/20 hover:border-primary/30">
      {/* Card Header */}
      <div className="p-5 md:p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          {/* Left Side - Title & Info */}
          <div className="flex-1">
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-1">
                <h3 className="font-headline text-lg md:text-xl font-bold text-on-surface mb-2">
                  {problem.title}
                  {solved && <span className="ml-2 text-lg text-green-600">✓</span>}
                </h3>
              </div>
            </div>

            {/* Difficulty Badge */}
            <div className="flex flex-wrap gap-2 mb-3">
              <span
                className={`${getDifficultyStyles(
                  problem.difficulty
                )} text-xs font-bold px-3 py-1 rounded-lg`}
              >
                {problem.difficulty}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {problem.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-on-surface-variant bg-surface-container px-3 py-1 rounded-full border border-outline-variant/20 hover:border-primary/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side - Buttons */}
          <div className="flex gap-2 flex-col sm:flex-row md:flex-col lg:flex-row">
            <a
              href={problem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-gradient text-on-primary px-4 py-2 rounded-lg font-label text-xs font-bold text-center flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              <span className="hidden sm:inline">View</span>
            </a>

            {onToggleSolved && (
              <button
                onClick={() => onToggleSolved(problem.id)}
                className={`px-4 py-2 rounded-lg font-label text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  solved
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200 hover:bg-green-200'
                    : 'bg-surface-container text-on-surface-variant border border-outline-variant/20 hover:border-primary/50'
                }`}
              >
                <span className="material-symbols-outlined text-sm">
                  {solved ? 'check_circle' : 'check_circle_outline'}
                </span>
                <span className="hidden sm:inline">{solved ? 'Done' : 'Mark'}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Expandable Section */}
      <div className="border-t border-outline-variant/20">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-5 md:px-6 py-3 flex items-center justify-between hover:bg-surface-container-low transition-colors"
        >
          <span className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-wider">
            {isExpanded ? 'Hide' : 'Show'} Solution
          </span>
          <span className="material-symbols-outlined text-on-surface-variant transition-transform duration-300"
            style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            expand_more
          </span>
        </button>

        {isExpanded && (
          <div className="bg-surface-container-low px-5 md:px-6 py-5 space-y-5 animate-fade-in-up border-t border-outline-variant/20">
            {/* Solution Explanation */}
            <div>
              <h4 className="font-headline text-xs font-bold text-on-surface mb-2 uppercase tracking-wider">
                Approach
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {problem.solution}
              </p>
            </div>

            {/* Code Block */}
            <div>
              <h4 className="font-headline text-xs font-bold text-on-surface mb-2 uppercase tracking-wider">
                Solution Code
              </h4>
              <pre className="bg-surface-container-lowest rounded-lg p-4 overflow-x-auto border border-outline-variant/20">
                <code className="text-xs md:text-sm font-mono text-on-surface whitespace-pre-wrap break-words leading-relaxed">
                  {problem.code}
                </code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(ProblemCard);
