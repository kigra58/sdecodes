import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start bg-surface-container-low rounded-xl p-8 md:p-16" id="contact">
      <ContactInfo />
      <ContactForm />
    </section>
  );
};

export default ContactSection;
