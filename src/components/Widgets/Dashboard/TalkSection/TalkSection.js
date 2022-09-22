import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/future/image";
import React from "react";
import PrimaryButton from "../../../UI/Buttons/PrimaryButton/PrimaryButton";

const TalkSection = () => {
  return (
    <Container>
      <Box sx={{ marginBottom: "130px" }}>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between" }}>
          <Grid item md={6}>
            <Typography
              sx={{
                color: "#EE6F57",
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "50px",
                lineHeight: "63px",
                letterSpacing: " -0.035em",
                marginBottom: "43px",
              }}>
              Let’s Talk
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "26px",
                letterSpacing: "-0.07em",
                maxWidth: "490px",
                marginBottom: "65px",
              }}>
              We help businesses make the most of the web. <br /> If you have
              any questions about our services, our work, <br /> or anything
              about us, please don’t hesitate to contact us.
            </Typography>
            <PrimaryButton btnText="Contact Us" />
          </Grid>
          <Grid item md={4.1}>
            <Box
              sx={{
                width: "100%",
                height: "305px",
                background: "white",
                borderRadius: "20px",
                marginRight: "0",
              }}></Box>
            {/* <Image src={projectImage} alt="project image" /> */}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default TalkSection;
