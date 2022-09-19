import Image from "next/future/image";
import { Box, Container, Grid, Typography } from "@mui/material";
import PrimaryButton from "../../../UI/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../../UI/Buttons/SecondaryButton/SecondaryButton";
import heroImage from "../../../../../public/Hero-img.png";

import {
  heroContainer,
  heroImageContainer,
  heroTitle,
  heroDesc,
  btnContainer,
  heroSubtitle,
} from "./heroStyle";
import OutlinedButton from "../../../UI/Buttons/OutlinedButton/OutlinedButton";

const Hero = ({ heroData, primaryBtnText, secondaryBtnText }) => {
  return (
    <Container>
      <Box sx={{}}>
        <Grid container sx={heroContainer}>
          <Grid item sm={12} md={7.4}>
            <Typography sx={heroTitle} variant="h1">
              {heroData?.heroTitle}
              Your Business, your Goal. Our Mission to make it Grow!
            </Typography>
            {heroData?.heroSubtitle && (
              <Typography sx={heroSubtitle} variant="h2">
                {heroData?.heroSubtitle}
              </Typography>
            )}
            <Typography sx={heroDesc} variant="h3">
              {heroData?.heroDescription}
              We add value to your business by providing the best experience the
              users can have, along with the most appealing interface according
              to the latest trends, all together developed in one perfect
              digital package.
            </Typography>
            <Box sx={btnContainer}>
              <PrimaryButton btnText="Work with Us" btnClass="btnMargin" />
              <OutlinedButton btnText="Portfolio" />
              {primaryBtnText && (
                <PrimaryButton btnText={primaryBtnText} btnClass="btnMargin" />
              )}
              {secondaryBtnText && (
                <OutlinedButton btnText={secondaryBtnText} />
              )}
            </Box>
          </Grid>
          <Box sx={heroImageContainer}>
            <Image src={heroImage} width={500} quality={100} alt="Hero Image" />
          </Box>
        </Grid>
      </Box>
    </Container>
  );
};

export default Hero;
