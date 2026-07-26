import { STATS_DATA } from '../utils/constant';
import { getStatClasses } from '../utils/helper';
import { FeaturedStat, PrimaryStat, IconStat } from './stats';
import React from 'react';

const StatsSection = () => {


  const renderStatContent = (stat: typeof STATS_DATA[0]) => {
    switch (stat.variant) {
      case 'featured':
        return (
          <FeaturedStat
            title={stat.title}
            value={stat.value}
            description={stat.description}
          />
        );
      case 'primary':
        return (
          <PrimaryStat
            value={stat.value}
            description={stat.description}
          />
        );
      case 'icon':
        return (
          <IconStat
            icon={stat.icon || ''}
            description={stat.description}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {STATS_DATA.map((stat, index) => (
          <div key={index} className={getStatClasses(stat.variant, stat.span)}>
            {renderStatContent(stat)}
          </div>
        ))}
      </div>
    </section>
  );
};

const MemoizedStatsSection = React.memo(StatsSection);


export default MemoizedStatsSection;
