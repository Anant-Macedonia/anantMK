import { Box } from "@mui/material";
import React from "react";
import OurApproach from "../../components/Widgets/Dashboard/OurApproachSection/OurApproachSection";
import OurTeamSection from "../../components/Widgets/Dashboard/OurTeamSection/OurTeamSection";
import OurProjectSection from "../../components/Widgets/Dashboard/OurProjectSection/OurProjectSection";
import TalkSection from "../../components/Widgets/Dashboard/TalkSection/TalkSection";
import { GET_TALK_SECTION_DATA } from "../../queries/getTalkSection";
import { GET_PROJECTS_DATA } from "../../queries/getProjects";
import { client } from "../../lib/apollo";
import { GET_TEAM_MEMBERS_DATA } from "../../queries/getTeamMembers";
import { GET_APPROACH_SECTION_DATA } from "../../queries/getApproachSection";

const Company = (props) => {
  const { members } = props?.teamMembersData;
  const {
    talkSectionTitle,
    talkSectionDescription,
    talkSectionImage,
    talkButton,
  } = props?.talkSectionData?.talk;
  const { approachInfo } = props?.approachSectionData;
  return (
    <Box sx={{ marginTop: "105px" }}>
      <OurApproach approachInfo={approachInfo} />
      <OurTeamSection teamMembers={members} />
      <Box sx={{ marginTop: "180px" }}>
        <OurProjectSection projects={props?.projectsData?.projects} />
      </Box>
      <TalkSection
        title={talkSectionTitle}
        description={talkSectionDescription}
        talkImage={talkSectionImage}
        talkButton={talkButton}
      />
    </Box>
  );
};

export default Company;

export async function getStaticProps() {
  const { data: talkSectionData } = await client.query({
    query: GET_TALK_SECTION_DATA,
  });

  const { data: projectsData } = await client.query({
    query: GET_PROJECTS_DATA,
  });

  const { data: teamMembersData } = await client.query({
    query: GET_TEAM_MEMBERS_DATA,
  });

  const { data: approachSectionData } = await client.query({
    query: GET_APPROACH_SECTION_DATA,
  });

  return {
    props: {
      talkSectionData: {
        talk: talkSectionData?.nodeByUri?.talkFields,
      },
      projectsData: {
        projects: projectsData?.projects?.nodes,
      },
      teamMembersData: {
        members: teamMembersData?.teamMembers?.nodes,
      },
      approachSectionData: {
        approachInfo: approachSectionData?.approachSections?.nodes,
      },
    },
  };
}
