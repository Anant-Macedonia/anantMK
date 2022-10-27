import React from "react";
import { client } from "../../lib/apollo.js";
import { GET_UX_UI_DATA } from "../../queries/getUxUi.js";
import Hero from "../../components/Widgets/Dashboard/Hero/Hero.js";
import ServiceSteps from "../../components/Widgets/Dashboard/ServiceSteps/ServiceSteps.js";
import OurProjectSection from "../../components/Widgets/Dashboard/OurProjectSection/OurProjectSection.js";
import TalkSection from "../../components/Widgets/Dashboard/TalkSection/TalkSection.js";
import { heroTitle } from "../../components/Widgets/Dashboard/Hero/heroStyle.js";
import { GET_TALK_SECTION_DATA } from "../../queries/getTalkSection.js";
import { GET_PROJECTS_DATA } from "../../queries/getProjects.js";

const UxUi = (props) => {
  const { heroTitle, heroDescription, heroImage, buttons } =
    props.uxUiData.hero;
  const { steps } = props.uxUiData;
  const {
    talkSectionTitle,
    talkSectionDescription,
    talkSectionImage,
    talkButton,
  } = props.talkSectionData.talk;
  return (
    <div>
      <Hero
        title={heroTitle}
        description={heroDescription}
        heroImage={heroImage}
        buttons={buttons}
      />
      <ServiceSteps steps={steps} />
      <OurProjectSection projects={props.projectsData.projects} />
      <TalkSection
        title={talkSectionTitle}
        description={talkSectionDescription}
        talkImage={talkSectionImage}
        talkButton={talkButton}
      />
    </div>
  );
};

export default UxUi;

export async function getStaticProps() {
  const { data: uxUiData } = await client.query({
    query: GET_UX_UI_DATA,
  });
  const { data: talkSectionData } = await client.query({
    query: GET_TALK_SECTION_DATA,
  });
  const { data: projectsData } = await client.query({
    query: GET_PROJECTS_DATA,
  });

  return {
    props: {
      uxUiData: {
        hero: uxUiData?.nodeByUri?.uiUxFileds,
        steps: uxUiData?.uxSteps?.nodes,
      },
      talkSectionData: {
        talk: talkSectionData?.nodeByUri?.talkFields,
      },
      projectsData: {
        projects: projectsData?.projects?.nodes,
      },
    },
  };
}
