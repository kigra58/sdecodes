import React from 'react';

interface IconStatProps {
  icon: string;
  description: string;
}

const IconStat: React.FC<IconStatProps> = ({ icon, description }) => {
  return (
    <>
      <span className="material-symbols-outlined text-4xl text-primary mb-4">{icon}</span>
      <p className="text-sm font-bold text-primary uppercase tracking-widest leading-tight">{description}</p>
    </>
  );
};

export default React.memo(IconStat);
