import React from "react";
import Image from "next/future/image";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  cardDescription,
  cardLine,
  cardTitle,
  imageContainer,
  sectionTitle,
  servicesCard,
  servicesSectionContainer,
} from "./servicesStyle";
import styles from "./servicesSection.module.css";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

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

const ServicesSection = ({ services }) => {
  const smallScreenSize = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box className={styles.servicesContainer} sx={servicesSectionContainer}>
      <Container>
        <Box>
          <Typography sx={sectionTitle}>We specialize in...</Typography>
          {!smallScreenSize ? (
            <Stack
              spacing={2}
              display="flex"
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
            >
              {services.map((service, key) => {
                return (
                  <Box
                    key={key}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    {!smallScreenSize && <Box sx={cardLine}></Box>}
                    <Card sx={servicesCard}>
                      <Box sx={imageContainer}>
                        <Image
                          src={service.serviceFileds.serviceImage.sourceUrl}
                          width={!smallScreenSize ? 248 : 132}
                          height={!smallScreenSize ? 170 : 90}
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
          ) : (
            <Box>
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {services.map((service, key) => {
                  return (
                    <SwiperSlide key={key}>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Card sx={servicesCard}>
                          <Box sx={imageContainer}>
                            <Image
                              src={service.serviceFileds.serviceImage.sourceUrl}
                              width={!smallScreenSize ? 248 : 132}
                              height={!smallScreenSize ? 170 : 90}
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
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
