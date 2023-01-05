import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import {
  description,
  imageContainer,
  mainContainer,
  normalItem,
  selectedItem,
  stepsTitle,
  subtitle,
} from "./uxDesignStyle";
import styles from "./uxDesign.module.css";

const UxDesignComponent = ({ steps }) => {
  const [selectedDesign, setSelectedDesign] = useState("UX/UI Design");
  const uxItems = [
    {
      name: "UX/UI Design",
    },
    {
      name: "Marketing Sites",
    },
  ];

  const handleClick = (elementId) => {
    const element = document.querySelector(`#${elementId}`);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Box sx={{ background: "#002B42", height: "100px" }}>
        <Stack
          spacing={7}
          direction={"row"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100px"}
        >
          {uxItems.map((item, key) => {
            return (
              <Box key={key} onClick={() => setSelectedDesign(item.name)}>
                <Typography
                  sx={selectedDesign == item.name ? selectedItem : normalItem}
                >
                  {item.name}
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </Box>
      {selectedDesign == "UX/UI Design" && (
        <>
          <Box sx={{ marginTop: "100px", marginBottom: "80px" }}>
            <Typography sx={{ fontSize: "32px", textAlign: "center" }}>
              Our methods enhance the overall user experience of your product or
              service.
            </Typography>
          </Box>
          <Container sx={{ marginBottom: "170px" }}>
            <Grid container>
              {steps.map((step, key) => {
                return (
                  <Grid
                    item
                    xs={6}
                    sm={4}
                    md={2.4}
                    key={key}
                    onClick={() => handleClick(step.uxStepFields.title)}
                    sx={{ cursor: "pointer" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
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
                  </Grid>
                );
              })}
            </Grid>
          </Container>

          <Container>
            {steps.map((step, key) => {
              return (
                <Grid
                  key={key}
                  container
                  className={styles.mainContainer}
                  sx={mainContainer}
                  id={step.uxStepFields.title}
                >
                  <Grid item xs={6} className={styles.designImageContainer}>
                    <Image
                      src={
                        step.uxStepFields && step.uxStepFields.image?.sourceUrl
                      }
                      height={230}
                      width={400}
                      alt="design"
                    />
                  </Grid>

                  <Grid item xs={6} sx={{ marginBottom: "140px" }}>
                    <Typography className={styles.coloredTitle} sx={subtitle}>
                      {step.uxStepFields && step.uxStepFields.subtitle}
                    </Typography>
                    <Typography
                      sx={description}
                      dangerouslySetInnerHTML={{
                        __html:
                          step.uxStepFields && step.uxStepFields.description,
                      }}
                    />
                  </Grid>
                </Grid>
              );
            })}
          </Container>
        </>
      )}
    </>
  );
};

export default UxDesignComponent;
