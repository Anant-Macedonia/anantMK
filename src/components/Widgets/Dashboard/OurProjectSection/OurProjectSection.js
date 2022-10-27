import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import PrimaryButton from "../../../UI/Buttons/PrimaryButton/PrimaryButton";
import Image from "next/future/image";
import {
  ourProjectSectionContainer,
  ourProjectSectionTitle,
  ourProjectContainer,
  projectTitle,
  projectDesc,
} from "./ourProjectStyle";

const OurProjectSection = ({ projects }) => {
  const [projectNum, setProjectNum] = useState(0);

  if (projectNum > 2) {
    setProjectNum(0);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectNum((prevProjectNum) => prevProjectNum + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [projectNum]);

  return (
    <Container>
      <Box sx={ourProjectSectionContainer}>
        <Typography sx={ourProjectSectionTitle}>
          Take a look at some of our projects.
        </Typography>
        <Box sx={ourProjectContainer}>
          {projects.map((project, key) => {
            return (
              <Grid container key={key}>
                <Grid item md={7.2}>
                  {projectNum === key && (
                    <>
                      <Typography sx={projectTitle}>
                        {project.projectFields.projectTitle}
                      </Typography>
                      <Box
                        sx={projectDesc}
                        dangerouslySetInnerHTML={{
                          __html: project.projectFields.projectDescription,
                        }}
                      />

                      <PrimaryButton
                        btnText="View Project"
                        link={project.projectFields.projectLink}
                      />
                    </>
                  )}
                </Grid>
                <Grid
                  item
                  md={4.8}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {projectNum === key && (
                    <Image
                      src={project.projectFields.projectImage.sourceUrl}
                      alt=" "
                      width={428}
                      height={360}
                      quality={100}
                      style={{ marginTop: "25px" }}
                    />
                  )}
                </Grid>
              </Grid>
            );
          })}
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "90px",
            }}
          >
            {projects.map((item, key) => {
              return (
                <Box
                  key={key}
                  sx={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "100%",
                    background: `${
                      projectNum === key
                        ? "#DF6B56"
                        : "rgba(223, 107, 86, 0.88)"
                    }`,
                    marginRight: "18px",
                    transform: `${projectNum === key && "scale(1.3)"}`,
                    cursor: "pointer",
                  }}
                  onClick={() => setProjectNum(key)}
                ></Box>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default OurProjectSection;
