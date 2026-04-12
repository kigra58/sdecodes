
import HeroContent from './HeroContent';
import StatsSection from './StatsSection';
import ProjectReveal from './ProjectReveal';

const HomeHero = () => {
  return (
    <section className="pb-12" id="home">
      {/* Hero Section */}
      <HeroContent />

      {/* Stats / Proof Section (Bento Grid Style) */}
      <StatsSection />

      {/* Signature Component: Project Reveal */}
      <ProjectReveal />
    </section>
  );
};

export default HomeHero;
