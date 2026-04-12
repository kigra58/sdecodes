import BioContent from './BioContent';

const AboutSection = () => {
  return (
    <section className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-32" id="about">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Profile Image with Editorial Asymmetry */}
        <div className="w-full lg:w-5/12 relative">
          <div className="aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden shadow-sm group">
            <img 
              alt="Professional portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpF5KL1uYbQb56mWfGcSQVZQyb9sRHz5M5Hqz6UZ7tr07QL28gdg1yxASqtgv0QXmxeuFJUxzGOR7abFQrumeoH1bmZ77dYZdStVDFr58Bj1MoERr_ZS3FSVugSwnBhfqzPKsnBTni5WNNrfpV0QylcpOkeSAhruxXdvEHiyhBpbC1H4r9O7K2_M84J3wJlzJuMMSUbZjCbxM_ins9oNxHqEne92ukjUFbO6aXJiffLjCIK-RBzduqq1IOFrn0T9ucaJ5VP2uv6LI"
            />
          </div>
          {/* Decorative Element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        </div>
        {/* Detailed Bio */}
        <BioContent />
      </div>
    </section>
  );
};

export default AboutSection;
