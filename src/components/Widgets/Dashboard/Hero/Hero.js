import { Box, Container, Grid, Typography } from "@mui/material";
import Lottie from "react-lottie";
import PrimaryButton from "../../../UI/Buttons/PrimaryButton/PrimaryButton";
import OutlinedButton from "../../../UI/Buttons/OutlinedButton/OutlinedButton";
import {
  heroContainer,
  heroImageContainer,
  heroTitle,
  heroDesc,
  btnContainer,
  heroSubtitle,
} from "./heroStyle";
import animationData from "../../../../lottie/heroAnimation.json";

const Hero = ({ heroData, primaryBtnText, secondaryBtnText }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <Container>
      <Box sx={heroContainer}>
        <Grid container>
          <Grid item sm={12} md={7.5}>
            <Typography sx={heroTitle} variant="h1">
              {heroData?.heroTitle}
              Your Business, your Goal.{" "}
              <Box variant="span" sx={{ fontWeight: 700 }}>
                Our Mission to make it Grow!
              </Box>
            </Typography>
            {heroData?.heroSubtitle && (
              <Typography sx={heroSubtitle} variant="h2">
                {heroData?.heroSubtitle}
              </Typography>
            )}
            <Typography sx={heroDesc} variant="h3">
              {heroData?.heroDescription}
              We add value to your business by providing the best experience
              <br /> the users can have, along with the most appealing interface
              according <br /> to the latest trends, all together developed in
              one perfect digital package.
            </Typography>
            <Box sx={btnContainer}>
              <PrimaryButton btnText="Start a Project" btnClass="btnMargin" />
              <OutlinedButton btnText="Services" />
              {primaryBtnText && (
                <PrimaryButton btnText={primaryBtnText} btnClass="btnMargin" />
              )}
              {secondaryBtnText && (
                <OutlinedButton btnText={secondaryBtnText} />
              )}
            </Box>
          </Grid>
          <Box sx={heroImageContainer}>
            <Lottie options={defaultOptions} height={450} width={500} />
          </Box>
        </Grid>
      </Box>
    </Container>
  );
};

export default Hero;
