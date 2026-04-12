interface StatItemProps {
  value: string;
  label: string;
}

const StatItem = ({ value, label }: StatItemProps) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-headline text-6xl font-black text-indigo-900">{value}</span>
      <span className="font-label text-xs tracking-widest uppercase text-slate-500">{label}</span>
    </div>
  );
};

export default StatItem;
