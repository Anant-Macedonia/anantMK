import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import exapmleImage from "../../../../public/example-image.png";
import PrimaryButton from "../../UI/Buttons/PrimaryButton/PrimaryButton";
import {
  divider,
  mainTitle,
  pocDescriptions,
  pocMainContainer,
  pocSubtitles,
  sectionTitleContainer,
  titleCircleNumber,
  toolsAndMethodsDescription,
  toolsAndMethodsSubtitle,
  toolsAndMethodsTitle,
  whyPocTitle,
} from "./PocStyle";

const PocComponent = () => {
  const pocServices = [
    {
      title: "Technical support",
      description:
        "We offer a range of technical and consulting services to support the development and testing of prototypes, including design and engineering support, prototyping resources, and project management.",
    },
    {
      title: "Team expertise",
      description:
        "Our team of experts will work with you to understand your concept and identify any potential challenges or issues, and will help you to create a small-scale version of your product or service for testing.",
    },
    {
      title: "Ideas into reality",
      description:
        "Whether you are looking to bring a new product to market or simply want to explore the potential of a new idea, our POC service can help you to move forward with confidence.",
    },
  ];

  const toolsAndMethods = [
    {
      title: "Simulation",
      description:
        "Simulation tools can be used to create models or prototypes of the concept or product, allowing you to test and evaluate different scenarios and configurations.",
    },
    {
      title: "Prototyping",
      description:
        "Prototyping can be used to create models or prototypes of the concept or product, allowing you to test and evaluate different scenarios and configurations.",
    },
    {
      title: "Benchmarking",
      description:
        "This particular method can be used to compare the performance of a proposed solution to that of existing solutions in the market.",
    },
    {
      title: "Data Analysis",
      description:
        "Data analysis tools can be used to analyze data collected during the POC, helping you understand the results and identify any further issues or potential problems.",
    },
    {
      title: "Collaboration",
      description:
        "Facilitate communication and collaboration among team members during the POC, helping to ensure that all stakeholders are on the same page and working towards the same goals.",
    },
    {
      title: "Testing",
      description:
        "Testing tools can be used to test the performance, reliability, and other characteristics of the concept or product under different conditions.",
    },
  ];
  return (
    <>
      <Container>
        <Grid container sx={pocMainContainer}>
          <Grid item md={5.6} sx={sectionTitleContainer}>
            <Typography sx={mainTitle}>
              We help our clients validate the feasibility and functionality of
              their product or service ideas.
            </Typography>
            <Box>
              <PrimaryButton btnText="Get started" link="/contact" />
            </Box>
          </Grid>
          <Grid item md={6}>
            <Image src={exapmleImage} alt="example" />
          </Grid>

          <Divider orientation="horizontal" sx={divider} />
        </Grid>

        <Box sx={{ marginBottom: "80px" }}>
          <Typography sx={whyPocTitle}>Why choose our POC services?</Typography>
        </Box>
        <Grid container spacing={12} sx={{ marginBottom: "100px" }}>
          {pocServices.map((service) => {
            return (
              <Grid key={service.title} item xs={12} md={4}>
                <Box
                  sx={{
                    marginBottom: "24px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={exapmleImage}
                    width={247}
                    height={173}
                    alt="test"
                  />
                </Box>
                <Box sx={{ width: "311px" }}>
                  <Typography sx={pocSubtitles}>{service.title}</Typography>
                  <Typography sx={pocDescriptions}>
                    {service.description}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Box sx={{ background: "#145374" }}>
        <Container>
          <Typography sx={toolsAndMethodsTitle}>
            The tools & methods we use
          </Typography>
          <Grid
            container
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            {toolsAndMethods.map((item, key) => {
              return (
                <Grid
                  key={key + 1}
                  item
                  xs={12}
                  sm={5.8}
                  md={3.2}
                  sx={{ marginBottom: "80px" }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Typography component="span" sx={titleCircleNumber}>
                      {key + 1}
                    </Typography>
                    <Typography sx={toolsAndMethodsSubtitle}>
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography sx={toolsAndMethodsDescription}>
                    {item.description}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default PocComponent;
