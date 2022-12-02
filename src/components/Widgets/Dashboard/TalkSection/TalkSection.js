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

import {
  talkSectionContainer,
  // talkContentContainer,
  talkSectionDesc,
  talkSectionTitle,
  talkContainer,
  titleAndDescContainer,
  talkImageContainer,
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
  const mediumScreenSize = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box sx={talkContainer}>
      <Container>
        <Box sx={talkSectionContainer}>
          <Grid container>
            <Grid item xs={12} md={6.5} sx={titleAndDescContainer}>
              <Typography sx={talkSectionTitle}>{title}</Typography>
              <Box
                sx={talkSectionDesc}
                dangerouslySetInnerHTML={{ __html: description }}
              />
              {!mediumScreenSize && (
                <PrimaryButton
                  btnText={talkButton.talkButtonText}
                  link="/contact"
                />
              )}
            </Grid>

            <Grid item xs={12} md={5.5} sx={talkImageContainer}>
              <Image
                src={talkImage.sourceUrl}
                width={smallScreenSize ? 200 : mediumScreenSize ? 400 : 530} //520 i 200
                height={smallScreenSize ? 180 : mediumScreenSize ? 350 : 478} // 478 i 180
                alt="project image"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {mediumScreenSize && (
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
