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
  titleAndDescContainer,
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
            <Grid item xs={12} md={5} sx={titleAndDescContainer}>
              <Typography sx={talkSectionTitle}>{title}</Typography>
              <Box
                sx={talkSectionDesc}
                dangerouslySetInnerHTML={{ __html: description }}
              />
              {!smallScreenSize && (
                <PrimaryButton
                  btnText={talkButton.talkButtonText}
                  link="/contact"
                />
              )}
            </Grid>

            <Grid
              item
              xs={12}
              md={5.5}
              sx={
                smallScreenSize && {
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "46px",
                }
              }
            >
              <Image
                src={talkImage.sourceUrl}
                width={!smallScreenSize ? 530 : 200}
                height={!smallScreenSize ? 478 : 180}
                alt="project image"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {smallScreenSize && (
                <PrimaryButton
                  btnText={talkButton.talkButtonText}
                  link="/contact"
                />
              )}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TalkSection;
