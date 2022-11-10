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
                <ServiceStepsButton btnText="Read more" />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ServiceSteps;
