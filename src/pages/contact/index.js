import React from "react";
import { client } from "../../lib/apollo.js";
import ContactForm from "../../components/Widgets/ContactForm/ContactForm";
import Hero from "../../components/Widgets/Dashboard/Hero/Hero";
import { GET_CONTACT_DATA } from "../../queries/getContact";

const Contact = (props) => {
  console.log("contact props", props);
  const {
    heroTitle,
    heroDescription,
    heroImage,
    contactEmail,
    contactMobile,
    contactPhone,
  } = props.contactData.hero;
  return (
    <div>
      {/* <Hero
        title={heroTitle}
        description={heroDescription}
        heroImage={heroImage}
        contactEmail={contactEmail}
        contactMobile={contactMobile}
        contactPhone={contactPhone}
        contactInfo
      /> */}
      {/* <ContactForm /> */}
    </div>
  );
};

export default Contact;

export async function getStaticProps() {
  const { data: contactData } = await client.query({
    query: GET_CONTACT_DATA,
  });

  return {
    props: {
      contactData: {
        hero: contactData?.nodeByUri?.contactFields,
      },
    },
  };
}
