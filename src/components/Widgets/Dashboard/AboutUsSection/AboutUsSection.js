import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import {
  aboutText,
  aboutUsSectionContainer,
  aboutUsSubtitle,
  aboutUsTitle,
  ourGoals,
  ourIdeas,
} from "./aboutUsSectionStyle.js";

const AboutUsSection = () => {
  return (
    <Container sx={aboutUsSectionContainer}>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Typography variant="h2" sx={aboutUsTitle}>
            Learn more about us.
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} sx={ourGoals}>
          <Typography variant="h3" sx={aboutUsSubtitle}>
            Our Goals
          </Typography>
          <Typography sx={aboutText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            mollis lectus id quam posuere ultrices. Donec magna metus, porttitor
            in enim sed, vestibulum eleifend purus. Morbi mauris orci, mollis
            non enim vitae, euismod pellentesque mauris. Quisque id tincidunt
            quam, id sodales lectus. Nullam quis leo ex. Mauri quis dolor rutrum
            sem interdum scelerisque sed a neque.
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} sx={ourIdeas}>
          <Typography variant="h3" sx={aboutUsSubtitle}>
            Our Ideas
          </Typography>
          <Typography sx={aboutText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            mollis lectus id quam posuere ultrices. Donec magna metus, porttitor
            in enim sed, vestibulum eleifend purus. Morbi mauris orci, mollis
            non enim vitae, euismod pellentesque mauris. Quisque id tincidunt
            quam, id sodales lectus. Nullam quis leo ex. Mauri quis dolor rutrum
            sem interdum scelerisque sed a neque. m vitae, euismod pellentesque
            mauris. Quisque id tincidunt quam, id sodales lectus. Nullam quis
            leo ex. Mauri quis dolor rutrum sem interdum scelerisque sed a
            neque.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUsSection;
