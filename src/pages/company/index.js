import { Box } from "@mui/material";
import React from "react";
import OurApproach from "../../components/Widgets/Dashboard/OurApproachSection/OurApproachSection";
import OurTeamSection from "../../components/Widgets/Dashboard/OurTeamSection/OurTeamSection";
import OurProjectSection from "../../components/Widgets/Dashboard/OurProjectSection/OurProjectSection";
import TalkSection from "../../components/Widgets/Dashboard/TalkSection/TalkSection";

const Company = () => {
  return (
    <Box sx={{ marginTop: "105px" }}>
      <OurApproach />
      <OurTeamSection />
      <Box sx={{ marginTop: "180px" }}>
        <OurProjectSection />
      </Box>
      <TalkSection />
    </Box>
  );
};

export default Company;
