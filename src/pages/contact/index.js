import React from "react";
import ContactForm from "../../components/Widgets/ContactForm/ContactForm";
import Hero from "../../components/Widgets/Dashboard/Hero/Hero";

const Contact = () => {
  return (
    <div>
      <Hero
        title="Let’s Work Together"
        description="We  help businesses make the most of the web. 
  If you have any questions about our services, our work, or anything about us, please don’t hesitate to contact us."
        contactInfo
      />
      <ContactForm />
    </div>
  );
};

export default Contact;
