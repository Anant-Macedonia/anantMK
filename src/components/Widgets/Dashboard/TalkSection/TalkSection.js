import React from "react";
import Image from "next/future/image";
import { Box, Container, Grid, Typography } from "@mui/material";
import PrimaryButton from "../../../UI/Buttons/PrimaryButton/PrimaryButton";
import TalkImage from "../../../../../public/talk-us.svg";

import {
  talkSectionContainer,
  talkContentContainer,
  talkSectionDesc,
  talkSectionTitle,
  talkContainer,
} from "./talkStyle";

const TalkSection = () => {
  return (
    <Box sx={talkContainer}>
      <Container>
        <Box sx={talkSectionContainer}>
          <Grid container sx={talkContentContainer}>
            <Grid item md={5}>
              <Typography sx={talkSectionTitle}>Let’s Talk</Typography>
              <Typography sx={talkSectionDesc}>
                We help businesses make the most of the web. <br /> If you have
                any questions about our services, our work, <br /> or anything
                about us, please dont hesitate to contact us.
              </Typography>
              <PrimaryButton btnText="Contact Us" />
            </Grid>
            <Grid item md={5.5}>
              <Image src={TalkImage} alt="project image" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TalkSection;
