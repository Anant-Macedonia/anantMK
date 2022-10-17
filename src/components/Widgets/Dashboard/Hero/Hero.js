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
import styles from "./hero.module.css";
import animationData from "../../../../lottie/heroAnimation.json";

const Hero = ({
  heroData,
  primaryBtnText,
  secondaryBtnText,
  title,
  subtitle,
  description,
  homeAnimation,
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <Box className={styles.heroContainer}>
      <Container>
        <Box sx={heroContainer}>
          <Grid container>
            <Grid item sm={12} md={7.5} sx={{ marginTop: "40px" }}>
              <Typography sx={heroTitle} variant="h1">
                {/* {heroData?.heroTitle} */}
                {title}

                <Box variant="span" sx={{ fontWeight: 700 }}>
                  {subtitle}
                </Box>
              </Typography>
              {/* {heroData?.heroSubtitle && (
                <Typography sx={heroSubtitle} variant="h2">
                  {heroData?.heroSubtitle}
                </Typography>
              )} */}
              <Typography sx={heroDesc} variant="h3">
                {/* {heroData?.heroDescription} */}
                {description}
              </Typography>
              <Box sx={btnContainer}>
                {/* <PrimaryButton btnText={primaryBtnText} btnClass="btnMargin" />
                <OutlinedButton btnText="Services" /> */}
                {primaryBtnText && (
                  <PrimaryButton
                    btnText={primaryBtnText}
                    btnClass="btnMargin"
                  />
                )}
                {secondaryBtnText && (
                  <OutlinedButton btnText={secondaryBtnText} />
                )}
              </Box>
            </Grid>
            {homeAnimation && (
              <Grid item md={4.5}>
                <Lottie options={defaultOptions} height={450} width={500} />
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
