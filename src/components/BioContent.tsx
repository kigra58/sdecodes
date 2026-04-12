import { BIO_DATA, MY_URLS } from '../utils/constant';

const BioContent = () => {
  const handleResumeDownload = () => {
    window.open(MY_URLS.RESUME, '_blank');
  };

  const handleViewProjects = () => {
    window.open(MY_URLS.GITHUB_URL, '_blank');
  };

  return (
    <div className="w-full lg:w-7/12">
      <div className="mb-4">
        <span className="font-label text-xs tracking-[0.2em] uppercase text-primary font-semibold">{BIO_DATA.badge}</span>
      </div>
      <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-indigo-900 mb-8">
        {BIO_DATA.title}<br/><span className="text-primary-container/40 italic">{BIO_DATA.titleHighlight}</span>{BIO_DATA.titleSuffix}
      </h1>
      <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg max-w-2xl">
        {BIO_DATA.description.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap gap-6">
        {BIO_DATA.buttons.map((button, index) => (
          <button
            key={index}
            onClick={
              button.text === "DOWNLOAD RESUME" 
                ? handleResumeDownload 
                : button.text === "VIEW PROJECTS" 
                ? handleViewProjects 
                : undefined
            }
            className={`px-8 py-4 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 flex items-center gap-3 transform hover:scale-105 ${
              button.variant === 'primary'
                ? 'bg-primary text-on-primary shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:bg-primary-container hover:shadow-xl'
                : 'bg-surface-container-highest text-on-surface hover:bg-surface-dim transition-colors border border-outline/20 hover:border-outline/40 hover:shadow-lg'
            }`}
          >
            {button.icon && <span className="material-symbols-outlined text-xl">{button.icon}</span>}
            {button.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BioContent;
