import { useEffect, useState } from "react";
import Image from "next/future/image";
// import { useAnimation, motion, transform } from "framer-motion";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
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

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1920,
    },
  },
});

const OurApproach = ({
  heroData,
  primaryBtnText,
  secondaryBtnText,
  approachInfo,
}) => {
  const [deg, setDeg] = useState(0);
  const [slider, setSlider] = useState(0);
  const [delay, setDelay] = useState("5s");
  const [play, setPlay] = useState("running");
  if (slider >= 3) {
    setSlider(0);
  }

  // const clickHandler = () => {
  //   setSlider((prevSlider) => prevSlider + 1);
  //   if (deg == 0 && delay == "5s") {
  //     setDeg(0);
  //     setDelay("0s");
  //     // setPlay("paused");
  //   } else {
  //     setDeg((prevDeg) => prevDeg + 90);
  //     // setPlay("paused");
  //   }
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlider((prevSlider) => prevSlider + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const smallScreenSize = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={ourApproachContainer}>
      <Container>
        <Grid container sx={{ columnGap: "75px" }}>
          <Grid item xs={12} md={7.2}>
            <Typography sx={ourApproachTitle} variant="h1">
              {heroData?.heroTitle}
              Learn more about us and take a look at our approach.
            </Typography>

            {approachInfo.map((info, key) => {
              return (
                slider === key && (
                  <Box key={key}>
                    <Typography sx={ourApproachSubtitle} variant="h2">
                      {info?.approachFields?.title}
                    </Typography>
                    <Box
                      sx={ourApproachDesc}
                      dangerouslySetInnerHTML={{
                        __html: info?.approachFields?.description,
                      }}
                    />

                    <PrimaryButton btnText="Learn More" link="/contact" />
                  </Box>
                )
              );
            })}
          </Grid>
          {!smallScreenSize && (
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

              {/* <Button variant="contained" onClick={clickHandler}>
              +
            </Button> */}
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurApproach;
