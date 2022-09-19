import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./aboutUsSection.module.css";

const AboutUsSection = () => {
  return (
    <Container className={styles.aboutUsSectionContainer}>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Typography variant="h2" className={styles.aboutUsTitle}>
            Learn more about us.
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} className={styles.ourGoals}>
          <Typography variant="h3" className={styles.aboutUsSubtitle}>
            Our Goals
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            mollis lectus id quam posuere ultrices. Donec magna metus, porttitor
            in enim sed, vestibulum eleifend purus. Morbi mauris orci, mollis
            non enim vitae, euismod pellentesque mauris. Quisque id tincidunt
            quam, id sodales lectus. Nullam quis leo ex. Mauri quis dolor rutrum
            sem interdum scelerisque sed a neque.
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} className={styles.ourIdeas}>
          <Typography variant="h3" className={styles.aboutUsSubtitle}>
            Our Ideas
          </Typography>
          <Typography>
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
