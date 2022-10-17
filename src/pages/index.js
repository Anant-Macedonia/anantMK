import AboutUsSection from "../components/Widgets/Dashboard/AboutUsSection/AboutUsSection";
import Hello from "../components/Widgets/Dashboard/HelloSection/Hello";
import Hero from "../components/Widgets/Dashboard/Hero/Hero";
import OurApproach from "../components/Widgets/Dashboard/OurApproachSection/OurApproachSection";
import OurProjectSection from "../components/Widgets/Dashboard/OurProjectSection/OurProjectSection";
import OurWork from "../components/Widgets/Dashboard/OurWorkSection/OurWork";
import ServicesSection from "../components/Widgets/Dashboard/ServicesSection/ServicesSection";
import TalkSection from "../components/Widgets/Dashboard/TalkSection/TalkSection";

export default function Home() {
  return (
    <>
      <Hero
        title="Your Business, your Goal."
        subtitle=" Our Mission to make it Grow!"
        description="We add value to your business by providing the best experience
                 the users can have, along with the most appealing
                interface according  to the latest trends, all together
                developed in one perfect digital package."
        primaryBtnText="Start a Project"
        secondaryBtnText="Services"
        homeAnimation
      />
      <OurApproach />
      <ServicesSection />
      <OurProjectSection />
      {/* <AboutUsSection /> */}
      {/* <Hello text="We are small digital family called Anant Macedonia. We specialize in UX/UI Design and Frontend Development. We are fully commited and always strive to help our clients improve their Business by creating and developing the best digital products! Our vision is to become the best digital product company in the region, and our mission is to get better every day and make that happen! Join our journey and lets gwo together!" /> */}
      <TalkSection />

      {/* <OurWork /> */}
    </>
  );
}
