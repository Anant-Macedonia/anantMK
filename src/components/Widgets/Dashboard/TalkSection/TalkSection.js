import React from "react";
import Image from "next/future/image";
import {
  Box,
  Container,
  Grid,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import PrimaryButton from "../../../UI/Buttons/PrimaryButton/PrimaryButton";
import TalkImage from "../../../../../public/talk-us.svg";

import {
  talkSectionContainer,
  talkContentContainer,
  talkSectionDesc,
  talkSectionTitle,
  talkContainer,
} from "./talkStyle";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1920,
    },
  },
});

const TalkSection = ({ title, description, talkImage, talkButton }) => {
  const smallScreenSize = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={talkContainer}>
      <Container>
        <Box sx={talkSectionContainer}>
          <Grid container sx={talkContentContainer}>
            <Grid item md={5}>
              <Typography sx={talkSectionTitle}>{title}</Typography>
              <Box
                sx={talkSectionDesc}
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <PrimaryButton
                btnText={talkButton.talkButtonText}
                link={talkButton.talkButtonLink.uri}
              />
            </Grid>

            <Grid item xs={12} md={5.5}>
              <Image
                src={talkImage.sourceUrl}
                width={!smallScreenSize ? 530 : 200}
                height={!smallScreenSize ? 478 : 180}
                alt="project image"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TalkSection;
