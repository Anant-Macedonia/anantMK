import React from "react";
import { GET_DEVELOPMENT_DATA } from "../../queries/getDevelopment.js";
import { GET_TALK_SECTION_DATA } from "../../queries/getTalkSection.js";
import { client } from "../../lib/apollo.js";
import Hero from "../../components/Widgets/Dashboard/Hero/Hero.js";
import ServiceSteps from "../../components/Widgets/Dashboard/ServiceSteps/ServiceSteps.js";
import OurProjectSection from "../../components/Widgets/Dashboard/OurProjectSection/OurProjectSection.js";
import TalkSection from "../../components/Widgets/Dashboard/TalkSection/TalkSection.js";
import { GET_PROJECTS_DATA } from "../../queries/getProjects.js";

const Development = (props) => {
  const { heroTitle, heroDescription, heroImage, buttons } =
    props.developmentData.hero;
  const { steps } = props.developmentData;
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

export default Development;

export async function getStaticProps() {
  const { data: developmentData } = await client.query({
    query: GET_DEVELOPMENT_DATA,
  });
  const { data: talkSectionData } = await client.query({
    query: GET_TALK_SECTION_DATA,
  });
  const { data: projectsData } = await client.query({
    query: GET_PROJECTS_DATA,
  });

  return {
    props: {
      developmentData: {
        hero: developmentData?.nodeByUri?.developmentFields,
        steps: developmentData?.developmentSteps?.nodes,
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
