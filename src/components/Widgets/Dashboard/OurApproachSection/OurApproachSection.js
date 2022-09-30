import { useEffect, useState } from "react";
import Image from "next/future/image";
// import { useAnimation, motion, transform } from "framer-motion";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import PrimaryButton from "../../../UI/Buttons/PrimaryButton/PrimaryButton.js";
// import circleImage from "../../../../../public/CircleGroup.svg"
// import circleImage from "../../../../../public/circle.svg";
import ellipseImage from "../../../../../public/ellipse.svg";
import styles from "./ourApproach.module.css";

import {
  ourApproachContainer,
  ourApproachTitle,
  ourApproachSubtitle,
  ourApproachDesc,
  ourApproachImageContainer,
  ellipseImage1,
  imageContainer,
} from "./ourApproachStyle";

const OurApproach = ({ heroData, primaryBtnText, secondaryBtnText }) => {
  const [deg, setDeg] = useState(0);
  const [slider, setSlider] = useState(0);
  const [delay, setDelay] = useState("5s");
  const [play, setPlay] = useState("running");
  if (slider === 360) {
    setSlider(0);
  }

  const clickHandler = () => {
    setSlider((prevSlider) => prevSlider + 90);
    if (deg == 0 && delay == "5s") {
      setDeg(0);
      setDelay("0s");
      // setPlay("paused");
    } else {
      setDeg((prevDeg) => prevDeg + 90);
      // setPlay("paused");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlider((prevSlider) => prevSlider + 90);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={ourApproachContainer}>
      <Container>
        <Grid container sx={{ columnGap: "75px" }}>
          <Grid item sm={12} md={7.2}>
            <Typography sx={ourApproachTitle} variant="h1">
              {heroData?.heroTitle}
              Learn more about us and take a look at our approach.
            </Typography>

            {slider === 0 && (
              <Typography sx={ourApproachSubtitle} variant="h2">
                {heroData?.heroSubtitle}
                Research and Design Strategy
              </Typography>
            )}
            {slider == 90 && (
              <Typography sx={ourApproachSubtitle} variant="h2">
                {heroData?.heroSubtitle}
                Design Thinking Methodology
              </Typography>
            )}
            {slider == 180 && (
              <Typography sx={ourApproachSubtitle} variant="h2">
                {heroData?.heroSubtitle}
                Product Development
              </Typography>
            )}
            {slider == 270 && (
              <Typography sx={ourApproachSubtitle} variant="h2">
                {heroData?.heroSubtitle}
                Product Testing
              </Typography>
            )}

            <Typography sx={ourApproachDesc} variant="h3">
              {heroData?.heroDescription}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              mollis lectus id quam posuere ultrices. Donec magna metus,
              porttitor in enim sed, vestibulum eleifend purus. Morbi mauris
              orci, mollis non enim vitae, euismod pellentesque mauris. Quisque
              id tincidunt quam, id sodales lectus. Nullam quis leo ex. Mauri
              quis dolor rutrum sem interdum scelerisque sed a neque.
            </Typography>
            <PrimaryButton btnText="Learn More" />
          </Grid>
          <Grid item md={4} sx={imageContainer}>
            <div className={styles.container}>
              <div className={styles.circle}>
                <Box
                  sx={{
                    width: "220px",
                    height: "220px",
                    transformOrigin: "bottom right",
                    animation: "rotate 20s infinite ",

                    animationDelay: delay,
                    animationPlayState: play,
                    "@keyframes rotate": {
                      "0%": {
                        transform: `rotate(${0 + deg}deg)`,
                      },
                      "5%": {
                        transform: `rotate(${90 + deg}deg)`,
                      },
                      "25%": {
                        transform: `rotate(${90 + deg}deg)`,
                      },
                      "30%": {
                        transform: `rotate(${180 + deg}deg)`,
                      },
                      "50%": {
                        transform: `rotate(${180 + deg}deg)`,
                      },
                      "55%": {
                        transform: `rotate(${270 + deg}deg)`,
                      },
                      "75%": {
                        transform: `rotate(${270 + deg}deg)`,
                      },
                      "80%": {
                        transform: `rotate(${360 + deg}deg)`,
                      },
                      "100%": {
                        transform: `rotate(${360 + deg}deg)`,
                      },
                    },
                  }}
                >
                  <Image
                    src={ellipseImage}
                    quality={100}
                    alt="Hero Image"
                    className={styles.ellipseImage1}
                  />
                </Box>
              </div>
            </div>

            <Button variant="contained" onClick={clickHandler}>
              +
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurApproach;
