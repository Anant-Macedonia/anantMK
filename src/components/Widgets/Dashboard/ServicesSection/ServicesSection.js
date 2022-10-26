import React from "react";
import Image from "next/future/image";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import {
  cardDescription,
  cardLine,
  cardTitle,
  imageContainer,
  sectionTitle,
  servicesCard,
} from "./servicesStyle";
import styles from "./servicesSection.module.css";

const ServicesSection = ({ services }) => {
  return (
    <Box
      className={styles.servicesContainer}
      sx={{ paddingBottom: "100px", paddingTop: "110px" }}
    >
      <Container>
        <Box>
          <Typography sx={sectionTitle}>We specialize in...</Typography>
          <Stack
            spacing={2}
            display="flex"
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
          >
            {services.map((service, key) => {
              return (
                <Box key={key}>
                  <Box sx={cardLine}></Box>
                  <Card sx={servicesCard}>
                    <Box sx={imageContainer}>
                      <Image
                        src={service.serviceFileds.serviceImage.sourceUrl}
                        width={248}
                        height={170}
                        alt="ux-image"
                      />
                    </Box>

                    <CardContent>
                      <Typography sx={cardTitle}>
                        {service.serviceFileds.serviceTitle}
                      </Typography>
                      <Typography sx={cardDescription}>
                        {service.serviceFileds.serviceDescription}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
