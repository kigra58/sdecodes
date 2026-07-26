import React from 'react';

interface StatsSectionProps {
  total: number;
  easy: number;
  medium: number;
  hard: number;
}

const StatItem = ({ label, count, color }: { label: string; count: number; color: string }) => (
  <div className={`${color} rounded-xl p-5 md:p-6 flex flex-col items-center justify-center text-center border`}>
    <div className="text-3xl md:text-4xl font-bold mb-2">{count}</div>
    <div className="text-xs md:text-sm font-label font-bold uppercase tracking-wider">
      {label}
    </div>
  </div>
);

const StatsSection = ({ total, easy, medium, hard }: StatsSectionProps) => {
  return (
    <div className="mb-12">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-headline font-bold text-on-surface">
          Your Progress
        </h2>
        <p className="text-on-surface-variant text-sm md:text-base mt-2">Track your LeetCode journey</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <StatItem
          label="Total"
          count={total}
          color="bg-surface-container-lowest border-outline-variant/20 text-on-surface"
        />
        <StatItem
          label="Easy"
          count={easy}
          color="bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800"
        />
        <StatItem
          label="Medium"
          count={medium}
          color="bg-yellow-50 dark:bg-yellow-950/50 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800"
        />
        <StatItem
          label="Hard"
          count={hard}
          color="bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800"
        />
      </div>
    </div>
  );
};

export default React.memo(StatsSection);
