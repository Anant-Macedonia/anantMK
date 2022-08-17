import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import classes from "./contactSection.module.css";

const ContactSection = ({ contactData }) => {
  return (
    <Box className={classes.contactSectionContainer}>
      <Container>
        <Grid container>
          <Grid item xs={7}>
            <Typography className={classes.contactTitle} variant="h2">
              {contactData.contactTitle}
            </Typography>
            <Typography className={classes.contactDescription}>
              {contactData.contactDescription}
            </Typography>
            <Button className={classes.contactBtn} variant="contained">
              Contact Us
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Box
              className={classes.contactImageContainer}
              sx={{
                backgroundImage: `url(${contactData.contactImage.sourceUrl})`,
              }}
            ></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
