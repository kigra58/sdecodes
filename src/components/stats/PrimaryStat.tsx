import React from 'react';

interface PrimaryStatProps {
  value: string;
  description: string;
}

const PrimaryStat: React.FC<PrimaryStatProps> = ({ value, description }) => {
  return (
    <>
      <span className="text-4xl font-bold mb-2">{value}</span>
      <p className="text-sm font-medium opacity-80 uppercase tracking-widest">{description}</p>
    </>
  );
};

export default React.memo(PrimaryStat);
