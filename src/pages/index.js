import AboutUsSection from "../components/Widgets/Dashboard/AboutUsSection/AboutUsSection";
import Hello from "../components/Widgets/Dashboard/HelloSection/Hello";
import Hero from "../components/Widgets/Dashboard/Hero/Hero";
import OurApproach from "../components/Widgets/Dashboard/OurApproachSection/OurApproachSection";
import OurWork from "../components/Widgets/Dashboard/OurWorkSection/OurWork";

export default function Home() {
  return (
    <>
      <Hero />
      <OurApproach />
      <AboutUsSection />
      <Hello text="We are small digital family called Anant Macedonia. We specialize in UX/UI Design and Frontend Development. We are fully commited and always strive to help our clients improve their Business by creating and developing the best digital products! Our vision is to become the best digital product company in the region, and our mission is to get better every day and make that happen! Join our journey and lets gwo together!" />
      <OurWork />
    </>
  );
}
