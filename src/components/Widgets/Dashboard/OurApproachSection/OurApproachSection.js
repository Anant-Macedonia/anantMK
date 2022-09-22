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
  const [currentDeg, setCurrentDeg] = useState(0);
  const [isTrue, setIsTrue] = useState("running");
  const [slider, setSlider] = useState(0);

  const needDeg = deg + currentDeg;

  console.log(!isTrue ? "false" : "rotate 20s 5s infinite");
  console.log(deg);

  // const css = imageClass
  //   .trim()
  //   .split(" ")
  //   .map((c) => styles[c])
  //   .join(" ");

  if (slider === 360) {
    setSlider(0);
  }

  // if (num === 0) {
  //   setNum(4);
  // }

  const clickHandler = () => {
    setDeg(deg + 90);
    setIsTrue("paused");
    const interval = setInterval(() => {
      setIsTrue("running");
    }, 5000);
    return () => clearInterval(interval);
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

            {slider == 0 && (
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
                    animation: "rotate 20s 5s infinite",
                    animationPlayState: `${isTrue}`,
                    "@keyframes rotate": {
                      "0%": {
                        transform: `rotate(${0 + needDeg}deg)`,
                      },
                      "25%": {
                        transform: `rotate(${90 + needDeg}deg)`,
                      },
                      "50%": {
                        transform: `rotate(${180 + needDeg}deg)`,
                      },
                      "75%": {
                        transform: `rotate(${270 + needDeg}deg)`,
                      },
                      "100%": {
                        transform: `rotate(${360 + needDeg}deg)`,
                      },
                    },
                  }}>
                  <Image
                    src={ellipseImage}
                    quality={100}
                    alt="Hero Image"
                    className={styles.ellipseImage1}
                  />
                </Box>
              </div>
            </div>

            {/* 
            <Image
              src={circleImage}
              quality={100}
              alt="Hero "
              className={styles.approachImage}
            /> */}

            {/* <Button variant="contained" onClick={clickHandler}>
              -
            </Button>
            <Button variant="contained" onClick={clickHandler}>
              +
            </Button> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurApproach;
