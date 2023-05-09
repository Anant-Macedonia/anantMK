import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import arrows from "../../../../../public/Vector.png";
import {
  designDevContainer,
  imageTitleContainer,
  itemDescription,
  itemsContainer,
  itemTitle,
  sectionContainer,
  sectionDescription,
  sectionTitle,
} from "./designDevStyle";
import styles from "./designDev.module.css";
import Link from "next/link";

const DesignSection = () => {
  const designDescription =
    "Our design service offers a full range of support for all your design needs. Our team of experienced designers will work with you to create visually stunning and effective designs that will help you stand out in the market.";
  const designItems = [
    {
      name: "UX/UI Design",
      description:
        "Creating intuitive and user-friendly interfaces that enhance the overall user experience of your product or service.",
    },
    {
      name: "Marketing Sites",
      description: "Create a professional and effective online presence.",
    },
    {
      name: "Knowledge Sites",
      description:"Creating intuitive and user-friendly interfaces that enhance the overall user experience of your product or service.",
    },
  ];
  const developmentDescription =
    "Our development service offers a full range of support for all your development needs. Our team will work with you to create innovative and effective solutions that will help you achieve your business goals.";

  const developmentItems = [
    {
      name: "POC",
      description:
        "Creating intuitive and user-friendly interfaces that enhance the overall user experience of your product or service.",
    },
    {
      name: "API-Based development",
      description: "Create a professional and effective online presence.",
    },
    {
      name: "Marketing Sites",
      description: "Create a professional and effective online presence.",
    },
  ];

  return (
    <Box sx={designDevContainer}>
      <Container sx={sectionContainer}>
        <>
          <Grid container>
            <Grid item xs={12} md={4.9} sx={{ marginRight: "14%" }}>
              <Box sx={imageTitleContainer} className={styles.circleContainer}>
                <Typography sx={sectionTitle}>Design</Typography>
              </Box>
              <Typography sx={sectionDescription}>
                {designDescription}
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              {designItems.map((item) => {
                return (
                  <Link href="/services" passHref key={item.name}>
                    <Grid container key={item.name} sx={itemsContainer}>
                      <Grid item xs={10}>
                        <Typography sx={itemTitle}>{item.name}</Typography>
                        <Typography sx={itemDescription}>
                          {item.description}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Image src={arrows} alt="arrows" />
                      </Grid>
                    </Grid>
                  </Link>
                );
              })}
            </Grid>
          </Grid>

          <Grid container sx={{ marginTop: "100px" }}>
            <Grid item xs={12} md={5.4}>
              {developmentItems.map((item) => {
                return (
                  <Link href="/services" passHref key={item.name}>
                    <Grid container sx={itemsContainer}>
                      <Grid item xs={10}>
                        <Typography sx={itemTitle}>{item.name}</Typography>
                        <Typography sx={itemDescription}>
                          {item.description}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Image src={arrows} alt="arrows" />
                      </Grid>
                    </Grid>
                  </Link>
                );
              })}
            </Grid>

            <Grid item xs={12} md={4.9} sx={{ marginLeft: "14%" }}>
              <Box
                sx={{
                  height: "170px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "end",
                  marginBottom: "35px",
                }}
                className={styles.devCircleContainer}
              >
                <Typography sx={sectionTitle}>Development</Typography>
              </Box>
              <Typography sx={sectionDescription}>
                {developmentDescription}
              </Typography>
            </Grid>
          </Grid>
        </>
      </Container>
    </Box>
  );
};

export default DesignSection;
