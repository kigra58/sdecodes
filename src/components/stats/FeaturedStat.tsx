import React from 'react';

interface FeaturedStatProps {
  title: string;
  value: string;
  description: string;
}

const FeaturedStat: React.FC<FeaturedStatProps> = ({ title, value, description }) => {
  return (
    <>
      <h3 className="text-3xl font-bold text-primary mb-12 leading-tight">{title}</h3>
      <div className="flex items-center gap-4">
        <span className="text-5xl font-extrabold text-primary-container">{value}</span>
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-widest">{description}</p>
      </div>
    </>
  );
};

export default React.memo(FeaturedStat);
