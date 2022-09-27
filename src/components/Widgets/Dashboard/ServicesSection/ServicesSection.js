import React from "react";
import Image from "next/future/image";
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import uxImage from "../../../../../public/ux-ui-service.svg";
import developImage from "../../../../../public/development-service.svg";
import {
  cardDescription,
  cardLine,
  cardTitle,
  imageContainer,
  sectionTitle,
  servicesCard,
} from "./servicesStyle";

const ServicesSection = () => {
  return (
    <Container>
      <Box sx={{ marginTop: "130px" }}>
        <Typography sx={sectionTitle}>We specialize in...</Typography>

        <Stack
          spacing={2}
          display="flex"
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Box>
            <Box sx={cardLine}></Box>
            <Card sx={servicesCard}>
              <Box sx={imageContainer}>
                <Image src={uxImage} />
              </Box>

              <CardContent>
                <Typography sx={cardTitle}>UX/UI Design</Typography>
                <Typography sx={cardDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque mollis lectus id quam posuere ultrices. Donec magna
                  metus, porttitor in enim sed, vestibulum eleifend purus. Morbi
                  mauris orci, mollis non enim vitae, euismod pellentesque
                  mauris. Quisque id tincidunt quam, id sodales lectus.
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box>
            <Box sx={cardLine}></Box>
            <Card sx={servicesCard}>
              <Box sx={imageContainer}>
                <Image src={developImage} />
              </Box>
              <CardContent>
                <Typography sx={cardTitle}>Development</Typography>
                <Typography sx={cardDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque mollis lectus id quam posuere ultrices. Donec magna
                  metus, porttitor in enim sed, vestibulum eleifend purus. Morbi
                  mauris orci, mollis non enim vitae, euismod pellentesque
                  mauris. Quisque id tincidunt quam, id sodales lectus.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default ServicesSection;
