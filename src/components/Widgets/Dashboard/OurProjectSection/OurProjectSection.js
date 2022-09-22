import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import PrimaryButton from "../../../UI/Buttons/PrimaryButton/PrimaryButton";
import projectImage from "../../../../../public/projectImage.png";
import Image from "next/future/image";

const OurProjectSection = () => {
  return (
    <Container>
      <Box sx={{ marginTop: "160px", marginBottom: "155px" }}>
        <Typography
          sx={{
            color: "#EE6F57",
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "50px",
            lineHeight: "63px",
            letterSpacing: "0.035em",
          }}>
          Take a look at some of our projects.
        </Typography>
        <Box
          sx={{
            height: "460px",
            background: "#145374",
            boxShadow: "2.6px 2.6px 19.5px rgba(20, 83, 116, 0.54)",
            borderRadius: "26px",
            marginTop: "58px",
          }}>
          <Grid container sx={{ padding: "34px 55px" }}>
            <Grid item md={7.5} sx={{ paddingRight: "20px" }}>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  fontSize: "36px",
                  lineHeight: "47px",
                  letterSpacing: " -0.07em",
                  marginTop: "28px",
                  marginBottom: "30px",
                }}>
                Corporate Website Design - Anant.US
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "20px",
                  letterSpacing: "-0.04em",
                  maxWidth: "590px",
                  marginBottom: "50px",
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <PrimaryButton btnText="View Project" />
            </Grid>
            <Grid item md={4.5}>
              <Image src={projectImage} alt="project image" />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default OurProjectSection;
