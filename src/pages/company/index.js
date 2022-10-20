import { Box } from "@mui/material";
import React from "react";
import OurApproach from "../../components/Widgets/Dashboard/OurApproachSection/OurApproachSection";
import OurTeamSection from "../../components/Widgets/Dashboard/OurTeamSection/OurTeamSection";

const Company = () => {
  return (
    <Box sx={{ marginTop: "105px" }}>
      <OurApproach />
      <OurTeamSection />
    </Box>
  );
};

export default Company;
