import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import uxImage from "../../../public/ux-ui-service.svg";
import developImage from "../../../public/development-service.svg";
import Image from "next/future/image";
import {
  developmentContainer,
  developmentHoveredTitle,
  developmentSubTitle,
  developmentTitle,
  developTitle,
  hoveredTitle,
  smallContainer,
  smallDevelopmentContainer,
  smallUxContainer,
  subTitle,
  title,
  uxContainer,
  uxHoveredTitle,
  uxTitle,
} from "../../../styles/serviceStyle";
import SecondaryButton from "../../components/UI/Buttons/SecondaryButton/SecondaryButton";

const Services = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <Grid
      onMouseLeave={() => setHoveredItem(null)}
      container
      sx={{
        marginTop: "120px",
      }}
    >
      {!hoveredItem ? (
        <>
          <Grid
            onMouseEnter={() => setHoveredItem("UI")}
            item
            md={6}
            sx={uxContainer}
          >
            <Typography sx={[title, uxTitle]}>UX/UI Design</Typography>
            <Box sx={{ marginTop: "93px" }}>
              <Image src={uxImage} alt="ux-image" />
            </Box>
          </Grid>
          <Grid
            onMouseEnter={() => setHoveredItem("Development")}
            item
            md={6}
            sx={developmentContainer}
          >
            <Typography sx={[title, developTitle]}>Development</Typography>
            <Box sx={{ marginTop: "93px" }}>
              <Image src={developImage} alt="ux-image" />
            </Box>
          </Grid>
        </>
      ) : hoveredItem === "UI" ? (
        <>
          <Grid
            onMouseEnter={() => setHoveredItem("UI")}
            item
            md={11}
            sx={uxContainer}
          >
            <Typography sx={[hoveredTitle, uxHoveredTitle]}>
              UX/UI Design
            </Typography>
            <Stack direction="row" spacing={8}>
              <Box sx={subTitle}>Research</Box>
              <Box sx={subTitle}>Design</Box>
              <Box sx={subTitle}>Prototyping</Box>
              <Box sx={subTitle}>Testing</Box>
            </Stack>
            <Box sx={{ marginTop: "125px" }}>
              <SecondaryButton href="/services/ux-ui" btnText="Learn More" />
            </Box>
          </Grid>
          <Grid
            onMouseEnter={() => setHoveredItem("Development")}
            item
            md={1}
            sx={developmentContainer}
          >
            <Typography sx={[smallContainer, smallDevelopmentContainer]}>
              Development
            </Typography>
          </Grid>
        </>
      ) : (
        hoveredItem === "Development" && (
          <>
            <Grid
              onMouseEnter={() => setHoveredItem("UI")}
              item
              md={1}
              sx={uxContainer}
            >
              <Typography sx={[smallContainer, smallUxContainer]}>
                UX/UI Design
              </Typography>
            </Grid>
            <Grid item md={11} sx={developmentContainer}>
              <Typography sx={[hoveredTitle, developmentHoveredTitle]}>
                Development
              </Typography>
              <Stack direction="row" spacing={8}>
                <Box sx={developmentSubTitle}>Research</Box>
                <Box sx={developmentSubTitle}>Design</Box>
                <Box sx={developmentSubTitle}>Prototyping</Box>
                <Box sx={developmentSubTitle}>Testing</Box>
              </Stack>
              <Box sx={{ marginTop: "125px" }}>
                <SecondaryButton
                  href="/services/development"
                  btnText="Learn More"
                />
              </Box>
            </Grid>
          </>
        )
      )}
    </Grid>
  );
};

export default Services;
