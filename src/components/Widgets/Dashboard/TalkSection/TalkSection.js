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

const TalkSection = ({ title, description, talkImage, talkButton }) => {
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
            <Grid item md={5.5}>
              <Image
                src={talkImage.sourceUrl}
                width={530}
                height={478}
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
