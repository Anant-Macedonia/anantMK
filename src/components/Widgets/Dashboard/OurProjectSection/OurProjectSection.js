import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import PrimaryButton from "../../../UI/Buttons/PrimaryButton/PrimaryButton";
import Image from "next/future/image";
import {
  ourProjectSectionContainer,
  ourProjectSectionTitle,
  ourProjectContainer,
  projectTitle,
  projectDesc,
  ourProjectMobileContainer,
} from "./ourProjectStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

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

const OurProjectSection = ({ projects }) => {
  const smallScreenSize = useMediaQuery(theme.breakpoints.down("md"));
  const [projectNum, setProjectNum] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  if (projectNum > 2) {
    setProjectNum(0);
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
        setProjectNum((prevProjectNum) => prevProjectNum + 1);
      }
    if (isRightSwipe) {
      if (projectNum > 0) {
        setProjectNum((prevProjectNum) => prevProjectNum - 1);
      }
    }
  };

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
          Take a look at our projects.
        </Typography>
        <Box
          sx={
            !smallScreenSize ? ourProjectContainer : ourProjectMobileContainer
          }
        >
          {!smallScreenSize ? (
            projects.map((project, key) => {
              return (
                <Grid container key={key}>
                  {!smallScreenSize && (
                    <Grid item md={6.5} lg={7.2}>
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
                            target="_blank"
                            link={project.projectFields.projectLink}
                          />
                        </>
                      )}
                    </Grid>
                  )}
                  <Grid
                    item
                    xs={12}
                    md={5.5}
                    lg={4.8}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                  >
                    {projectNum === key && (
                      <Image
                        src={project.projectFields.projectImage.sourceUrl}
                        alt="project"
                        width={410}
                        height={350}
                        quality={100}
                        style={{ marginTop: "25px" }}
                      />
                    )}
                  </Grid>
                </Grid>
              );
            })
          ) : (
            <Box>
              <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {projects.map((project, key) => {
                  return (
                    <SwiperSlide
                      key={key}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src={project.projectFields.projectImage.sourceUrl}
                        alt="project"
                        width={354}
                        height={230}
                        quality={100}
                        style={{ marginTop: "25px", marginBottom: "60px" }}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Box>
          )}

          {!smallScreenSize && (
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
                      marginRight: "12px",
                      transform: `${projectNum === key && "scale(1.3)"}`,
                      cursor: "pointer",
                    }}
                    onClick={() => setProjectNum(key)}
                  ></Box>
                );
              })}
            </Grid>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default OurProjectSection;
