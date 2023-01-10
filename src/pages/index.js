import Hero from "../components/Widgets/Dashboard/Hero/Hero";
import OurApproach from "../components/Widgets/Dashboard/OurApproachSection/OurApproachSection";
import OurProjectSection from "../components/Widgets/Dashboard/OurProjectSection/OurProjectSection";
import ServicesSection from "../components/Widgets/Dashboard/ServicesSection/ServicesSection";
import TalkSection from "../components/Widgets/Dashboard/TalkSection/TalkSection";
import { client } from "../lib/apollo.js";
import { GET_HOME_DATA } from "../queries/getHome";
import { GET_TALK_SECTION_DATA } from "../queries/getTalkSection";
import { GET_PROJECTS_DATA } from "../queries/getProjects.js";
import { GET_APPROACH_SECTION_DATA } from "../queries/getApproachSection";
import Head from "next/head";
import DesignDevSection from "../components/Widgets/Dashboard/DesignDevSection/DesignSection";

export default function Home(props) {
  const { heroTitle, heroSubtitle, heroDescription, buttons } =
    props?.homeData?.hero;

  const {
    talkSectionTitle,
    talkSectionDescription,
    talkSectionImage,
    talkButton,
  } = props?.talkSectionData?.talk;

  const { approachInfo } = props?.approachSectionData;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Anant MK is marketing digital agency"
        />
        <title> Anant MK </title>
      </Head>
      <Hero
        title={heroTitle}
        subtitle={heroSubtitle}
        description={heroDescription}
        buttons={buttons}
        homeAnimation
        primaryButtonLink="/contact"
        secondaryButtonLink="/services"
      />
      <OurApproach approachInfo={approachInfo} />
      <DesignDevSection />
      {/* <ServicesSection services={props?.homeData?.serviceSection} /> */}
      <OurProjectSection projects={props?.projectsData?.projects} />
      <TalkSection
        title={talkSectionTitle}
        description={talkSectionDescription}
        talkImage={talkSectionImage}
        talkButton={talkButton}
      />
    </>
  );
}

export async function getStaticProps() {
  const { data: homeData } = await client.query({
    query: GET_HOME_DATA,
  });

  const { data: talkSectionData } = await client.query({
    query: GET_TALK_SECTION_DATA,
  });

  const { data: projectsData } = await client.query({
    query: GET_PROJECTS_DATA,
  });

  const { data: approachSectionData } = await client.query({
    query: GET_APPROACH_SECTION_DATA,
  });

  return {
    props: {
      homeData: {
        hero: homeData?.nodeByUri?.homePageFields,
        serviceSection: homeData?.serviceCards?.nodes,
      },
      talkSectionData: {
        talk: talkSectionData?.nodeByUri?.talkFields,
      },
      projectsData: {
        projects: projectsData?.projects?.nodes,
      },
      approachSectionData: {
        approachInfo: approachSectionData?.approachSections?.nodes,
      },
    },
  };
}
