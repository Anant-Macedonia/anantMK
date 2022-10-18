import React from "react";
import Hero from "../../components/Widgets/Dashboard/Hero/Hero.js";
import ServiceSteps from "../../components/Widgets/Dashboard/ServiceSteps/ServiceSteps.js";
import OurProjectSection from "../../components/Widgets/Dashboard/OurProjectSection/OurProjectSection.js";
import TalkSection from "../../components/Widgets/Dashboard/TalkSection/TalkSection.js";

const Development = () => {
  return (
    <div>
      <Hero
        title="Development"
        description="There is no doubt that only great UX and UI Design can make your website or app more engaging and increase conversion. To achieve that you need a team that's highly skilled in UX and UI design. At Anant Macedonia, we have the expertise to tackle the complex challenges of UX/UI design and our team members are always up for a challenge! Get in touch with us today and let's get your website looking great!"
        primaryBtnText="Start A Project"
      />
      <ServiceSteps />
      <OurProjectSection />
      <TalkSection />
    </div>
  );
};

export default Development;
