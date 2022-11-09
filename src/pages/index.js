import AboutUsSection from "../components/Widgets/Dashboard/AboutUsSection/AboutUsSection";
import Hello from "../components/Widgets/Dashboard/HelloSection/Hello";
import Hero from "../components/Widgets/Dashboard/Hero/Hero";
import OurApproach from "../components/Widgets/Dashboard/OurApproachSection/OurApproachSection";
import OurProjectSection from "../components/Widgets/Dashboard/OurProjectSection/OurProjectSection";
import OurWork from "../components/Widgets/Dashboard/OurWorkSection/OurWork";
import ServicesSection from "../components/Widgets/Dashboard/ServicesSection/ServicesSection";
import TalkSection from "../components/Widgets/Dashboard/TalkSection/TalkSection";
import { client } from "../lib/apollo.js";
import { GET_HOME_DATA } from "../queries/getHome";
// import { GET_TALK_SECTION_DATA } from "../queries/getTalkSection";
// import { GET_PROJECTS_DATA } from "../queries/getProjects.js";

export default function Home(props) {
  const { heroTitle, heroSubtitle, heroDescription } = props.homeData.hero;

  // const { talkSectionTitle, talkSectionDescription, talkSectionImage } =
  //   props.talkSectionData.talk;
  return (
    <>
      <Hero
        title={heroTitle}
        subtitle={heroSubtitle}
        description={heroDescription}
        primaryBtnText="Start a Project"
        secondaryBtnText="Services"
        homeAnimation
      />
      <OurApproach />
      <ServicesSection />
      <OurProjectSection />

      {/* <ServicesSection services={props.homeData.serviceSection} />
      <OurProjectSection projects={props.projectsData.projects} />
      <TalkSection
        title={talkSectionTitle}
        description={talkSectionDescription}
        talkImage={talkSectionImage}
      /> */}
    </>
  );
}

export async function getStaticProps() {
  const { data: homeData } = await client.query({
    query: GET_HOME_DATA,
  });

  return {
    props: {
      homeData: {
        hero: homeData?.nodeByUri?.homePageFields,
        serviceSection: homeData?.serviceCards?.nodes,
      },
    },
  };
}
