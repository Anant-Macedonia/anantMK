import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ServiceStepsButton from "../../../UI/Buttons/ServiceStepsButton/ServiceStepsButton";
import {
  activeStepNumber,
  activeStepsNumberContainer,
  btnContainer,
  cardDescription,
  serviceStepsContainer,
  stepsNumber,
  stepsNumberContainer,
  stepsTextContainer,
  stepsTitle,
} from "./serviceStepsStyle";

const ServiceSteps = ({ steps }) => {
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
    <Container sx={{ marginBottom: "160px", marginTop: "95px" }}>
      <Grid container sx={{ justifyContent: "center" }}>
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
                {/* <ServiceStepsButton btnText="Read more" /> */}
              </Box>
            </Grid>
          );
        })}
        {/* <Grid item xs={12} sm={6} md={2.4} sx={serviceStepsContainer}>
          <Box>
            <Box
              sx={
                step === 1 ? activeStepsNumberContainer : stepsNumberContainer
              }
            >
              <Typography sx={step === 1 ? activeStepNumber : stepsNumber}>
                1
              </Typography>
            </Box>
            <Box sx={stepsTextContainer}>
              <Typography variant="h3" sx={stepsTitle}>
                Research
              </Typography>

              <Typography sx={cardDescription}>SEO Analytics</Typography>
              <Typography sx={cardDescription}>
                User Surveys/Interviews
              </Typography>
              <Typography sx={cardDescription}>User Personas</Typography>
              <Typography sx={cardDescription}>User Journey Maps</Typography>
              <Typography sx={cardDescription}>Competitor Analysis</Typography>
              <Typography sx={cardDescription}>SWOT Analysis</Typography>
            </Box>
          </Box>
          <Box sx={btnContainer}>
            <ServiceStepsButton btnText="Read more" />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={2.4} sx={serviceStepsContainer}>
          <Box>
            <Box
              sx={
                step === 2 ? activeStepsNumberContainer : stepsNumberContainer
              }
            >
              <Typography sx={step === 2 ? activeStepNumber : stepsNumber}>
                2
              </Typography>
            </Box>
            <Box sx={stepsTextContainer}>
              <Typography variant="h3" sx={stepsTitle}>
                Design
              </Typography>

              <Typography sx={cardDescription}>Card Sorting</Typography>
              <Typography sx={cardDescription}>
                Information Architecture
              </Typography>
              <Typography sx={cardDescription}>User Flows</Typography>
              <Typography sx={cardDescription}>
                Low Fidelity Wireframes - UX
              </Typography>
              <Typography sx={cardDescription}>Mockups - UI</Typography>
              <Typography sx={cardDescription}>
                (Figma, Adobe XD, Photoshop, Illustrator)
              </Typography>
            </Box>
          </Box>
          <Box sx={btnContainer}>
            <ServiceStepsButton btnText="Read more" />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={2.4} sx={serviceStepsContainer}>
          <Box>
            <Box
              sx={
                step === 3 ? activeStepsNumberContainer : stepsNumberContainer
              }
            >
              <Typography sx={step === 3 ? activeStepNumber : stepsNumber}>
                3
              </Typography>
            </Box>
            <Box sx={stepsTextContainer}>
              <Typography variant="h3" sx={stepsTitle}>
                Prototyping
              </Typography>

              <Typography sx={cardDescription}>Animations</Typography>
              <Typography sx={cardDescription}>(Figma, Plugins)</Typography>
              <Typography sx={cardDescription}>Prototypes</Typography>
              <Typography sx={cardDescription}>(Figma, Adobe XD)</Typography>
            </Box>
          </Box>
          <Box sx={btnContainer}>
            <ServiceStepsButton btnText="Read more" />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={2.4} sx={serviceStepsContainer}>
          <Box>
            <Box
              sx={
                step === 4 ? activeStepsNumberContainer : stepsNumberContainer
              }
            >
              <Typography sx={step === 4 ? activeStepNumber : stepsNumber}>
                4
              </Typography>
            </Box>
            <Box sx={stepsTextContainer}>
              <Typography variant="h3" sx={stepsTitle}>
                Testing
              </Typography>

              <Typography sx={cardDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                mollis lectus id quam posuere ultrices. Donec
              </Typography>
            </Box>
          </Box>
          <Box sx={btnContainer}>
            <ServiceStepsButton btnText="Read more" />
          </Box>
        </Grid> */}
      </Grid>
    </Container>
  );
};

export default ServiceSteps;
