import Image from "next/image";
import {
  Box,
  Container,
  Grid,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import ServiceStepsButton from "../../../UI/Buttons/ServiceStepsButton/ServiceStepsButton";
import { AiOutlineClose } from "react-icons/ai";
import {
  btnContainer,
  cardDescription,
  cardInformationContainer,
  popupText,
  servicesPopup,
  serviceStepsContainer,
  stepsNumber,
  stepsNumberContainer,
  stepsNumberMainContainer,
  stepsSectionContainer,
  stepsTextContainer,
  stepsTitle,
} from "./serviceStepsStyle";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./serviceSteps.module.css";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1990,
    },
  },
});

const ServiceSteps = ({ steps }) => {
  const smallScreenSize = useMediaQuery(theme.breakpoints.down("sm"));
  const [stepNum, setStepNum] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  if (stepNum > 3) {
    setStepNum(0);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setStepNum((prevStepNum) => prevStepNum + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [stepNum]);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    }
    if (!showPopup) {
      document.body.style.overflow = "unset";
    }
  }, [showPopup]);

  return (
    <Container sx={stepsSectionContainer}>
      {showPopup && (
        <Box
          onClick={() => setShowPopup(false)}
          sx={{
            opacity: "0.75",
            position: "fixed",
            top: "0",
            left: "0",
            bottom: "0",
            background: "rgba(0, 48, 73)",
            width: "100%",
            height: "100vh",
            zIndex: "100",
          }}
        ></Box>
      )}

      <Grid container sx={{ justifyContent: "center" }}>
        {smallScreenSize ? (
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            centeredSlides={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 5000 }}
            modules={[Pagination, Navigation, Autoplay]}
            style={{ paddingBottom: "60px" }}
          >
            {steps.map((step, key) => {
              return (
                <SwiperSlide className="swiperSlide" key={key}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={2.4}
                    sx={serviceStepsContainer}
                    key={key}
                  >
                    <Box sx={stepsNumberMainContainer}>
                      <Box sx={stepsNumberContainer}>
                        <Typography sx={stepsNumber}>{key + 1}</Typography>
                      </Box>
                    </Box>
                    <Box sx={cardInformationContainer}>
                      <Box sx={stepsTextContainer}>
                        {/* <Typography sx={stepsTitle}>
                          {step.uxStepFields
                            ? step.uxStepFields.title
                            : step.developmentStepFileds &&
                              step.developmentStepFileds.title}
                        </Typography> */}

                        <Box
                          className={styles.cardDescription}
                          sx={cardDescription}
                          dangerouslySetInnerHTML={{
                            __html: step.uxStepFields
                              ? step.uxStepFields.description
                              : step.developmentStepFileds &&
                                step.developmentStepFileds.description,
                          }}
                        />
                      </Box>

                      <Box sx={btnContainer}>
                        <ServiceStepsButton btnText="Read more" />
                      </Box>
                    </Box>
                  </Grid>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <>
            {showPopup && (
              <Box sx={servicesPopup}>
                <AiOutlineClose
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowPopup(false)}
                  size={30}
                  color="#EE6F57"
                />
                <Box
                  sx={popupText}
                  dangerouslySetInnerHTML={{
                    __html: showPopup,
                  }}
                />
              </Box>
            )}
            {steps.map((step, key) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={2.4}
                  // sx={serviceStepsContainer}
                  key={key}
                >
                  <Box>
                    <Box
                      onClick={() =>
                        setShowPopup(
                          step.uxStepFields
                            ? step.uxStepFields.description
                            : step.developmentStepFileds &&
                                step.developmentStepFileds.description
                        )
                      }
                    >
                      <Image
                        src={
                          step.uxStepFields
                            ? step.uxStepFields.icon?.sourceUrl
                            : step.developmentStepFileds &&
                              step.developmentStepFileds.icon?.sourceUrl
                        }
                        alt="step"
                        width={94}
                        height={94}
                      />
                      <Typography sx={stepsTitle}>
                        {step.uxStepFields
                          ? step.uxStepFields.title
                          : step.developmentStepFileds &&
                            step.developmentStepFileds.title}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </>
        )}
      </Grid>
    </Container>
  );
};

export default ServiceSteps;
