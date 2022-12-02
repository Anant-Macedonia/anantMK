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
  Stack,
} from "@mui/material";
import PrimaryButton from "../../../UI/Buttons/PrimaryButton/PrimaryButton.js";
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

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
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const smallScreenSize = useMediaQuery(theme.breakpoints.down("md"));

  if (!smallScreenSize && slider > 3) {
    setSlider(0);
  }

  if (smallScreenSize && slider > 3) {
    setSlider(0);
  }

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe)
      if (isLeftSwipe) {
        setSlider((prevSlider) => prevSlider + 1);
      }
    if (isRightSwipe) {
      if (slider > 0) {
        setSlider((prevSlider) => prevSlider - 1);
      }
    }
  };

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

  return (
    <Box sx={ourApproachContainer}>
      <Container>
        <Grid container sx={{ columnGap: "65px" }}>
          <Grid item xs={12} md={5.5} lg={7.2}>
            <Typography sx={ourApproachTitle}>
              {heroData?.heroTitle}
              Learn more about us and our agile teamwork
            </Typography>

            {!smallScreenSize ? (
              approachInfo.map((info, key) => {
                return (
                  slider === key && (
                    <Box
                      key={key}
                      onTouchStart={onTouchStart}
                      onTouchMove={onTouchMove}
                      onTouchEnd={onTouchEnd}
                    >
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
              })
            ) : (
              <Box>
                <Swiper
                  pagination={{
                    clickable: true,
                    bulletClass: `swiper-pagination-bullet feature-pagination`,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {approachInfo.map((info, key) => {
                    return (
                      <SwiperSlide key={key}>
                        <Typography sx={ourApproachSubtitle} variant="h2">
                          {info?.approachFields?.title}
                        </Typography>
                        <Box
                          sx={ourApproachDesc}
                          dangerouslySetInnerHTML={{
                            __html: info?.approachFields?.description,
                          }}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </Box>
            )}
          </Grid>
          {!smallScreenSize && (
            <Grid item md={5} lg={4} sx={imageContainer}>
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
