import React from "react";
import Image from "next/future/image";
import { Box, Container, Grid, Typography } from "@mui/material";
import PrimaryButton from "../../../UI/Buttons/PrimaryButton/PrimaryButton";
import TalkImage from "../../../../../public/talk-us.png";

const TalkSection = () => {
  return (
    <Container>
      <Box sx={{ marginBottom: "130px" }}>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between" }}>
          <Grid item md={5}>
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
          <Grid item md={5}>
            <Image src={TalkImage} alt="project image" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default TalkSection;
