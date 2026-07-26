import { HERO_DATA } from '../utils/constant';

const HeroContent = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-6 md:px-12">
      <div className="flex flex-col lg:flex-row items-center gap-12 min-h-[600px]">
        <div className="flex-1 space-y-6 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-block bg-primary-fixed px-4 py-1.5 rounded-full">
            <span className="text-on-primary-fixed text-xs font-semibold tracking-widest uppercase">{HERO_DATA.badge}</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] text-primary">
            {HERO_DATA.title}<span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">{HERO_DATA.subtitle}</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            {HERO_DATA.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
            {/* {HERO_DATA.buttons.map((button, index) => (
              <button
                key={index}
                className={`px-10 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 w-full sm:w-auto ${
                  button.variant === 'primary'
                    ? 'bg-gradient-to-br from-primary to-primary-container text-on-primary'
                    : 'bg-surface-container-highest text-on-surface hover:bg-surface-dim'
                }`}
              >
                {button.text}
              </button>
            ))} */}
          </div>
        </div>
        <div className="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-square">
            {/* Decorative background element */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary-fixed/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-fixed/20 rounded-full blur-3xl -z-10"></div>
            <div className="w-full h-full rounded-xl overflow-hidden bg-surface-container-low shadow-2xl relative group">
              <img 
                alt={HERO_DATA.profileImage.alt} 
                className="w-full h-full object-cover filter saturate-[0.85] contrast-[1.1] grayscale-[0.2] transition-transform duration-700 group-hover:scale-110" 
                src={HERO_DATA.profileImage.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent mix-blend-multiply opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
