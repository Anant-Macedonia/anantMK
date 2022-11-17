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
import {
  activeStepNumber,
  activeStepsNumberContainer,
  btnContainer,
  cardDescription,
  cardInformationContainer,
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

const ServiceSteps = ({ steps }) => {
  const smallScreenSize = useMediaQuery(theme.breakpoints.down("sm"));
  const [stepNum, setStepNum] = useState(0);

  if (stepNum > 3) {
    setStepNum(0);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setStepNum((prevStepNum) => prevStepNum + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [stepNum]);

  return (
    <Container sx={stepsSectionContainer}>
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
                        <Typography variant="h3" sx={stepsTitle}>
                          {step.uxStepFields
                            ? step.uxStepFields.title
                            : step.developmentStepFileds &&
                              step.developmentStepFileds.title}
                        </Typography>

                        <Box
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
            {steps.map((step, key) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={2.4}
                  sx={serviceStepsContainer}
                  key={key}
                >
                  <Box>
                    <Box
                      sx={{
                        height: "150px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={
                          stepNum === key
                            ? activeStepsNumberContainer
                            : stepsNumberContainer
                        }
                      >
                        <Typography
                          sx={stepNum === key ? activeStepNumber : stepsNumber}
                        >
                          {key + 1}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={stepsTextContainer}>
                      <Typography variant="h3" sx={stepsTitle}>
                        {step.uxStepFields
                          ? step.uxStepFields.title
                          : step.developmentStepFileds &&
                            step.developmentStepFileds.title}
                      </Typography>

                      <Box
                        sx={cardDescription}
                        dangerouslySetInnerHTML={{
                          __html: step.uxStepFields
                            ? step.uxStepFields.description
                            : step.developmentStepFileds &&
                              step.developmentStepFileds.description,
                        }}
                      />
                    </Box>
                  </Box>
                  <Box sx={btnContainer}>
                    <ServiceStepsButton btnText="Read more" />
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
