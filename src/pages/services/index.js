import {
  Box,
  Grid,
  Stack,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import uxImage from "../../../public/ux-ui-service.svg";
import developImage from "../../../public/development-service.svg";
import Image from "next/future/image";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
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

const Services = () => {
  const smallScreenSize = useMediaQuery(theme.breakpoints.down("sm"));
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
            xs={6}
            sx={uxContainer}
          >
            <Typography sx={[title, uxTitle]}>UX/UI </Typography>
            {!smallScreenSize ? (
              <Box sx={{ marginTop: "93px" }}>
                <Image src={uxImage} alt="ux-image" />
              </Box>
            ) : (
              <Box sx={{ marginTop: "35px" }}>
                <FiArrowRightCircle size="33px" color="#145374" />
              </Box>
            )}
          </Grid>
          <Grid
            onMouseEnter={() => setHoveredItem("Development")}
            item
            xs={6}
            sx={developmentContainer}
          >
            <Typography sx={[title, developTitle]}>Dev</Typography>
            {!smallScreenSize ? (
              <Box sx={{ marginTop: "93px" }}>
                <Image src={developImage} alt="ux-image" />
              </Box>
            ) : (
              <Box sx={{ marginTop: "35px" }}>
                <FiArrowLeftCircle size="33px" color="#EE6F57" />
              </Box>
            )}
          </Grid>
        </>
      ) : hoveredItem === "UI" ? (
        <>
          {!smallScreenSize ? (
            <>
              <Grid
                onMouseEnter={() => setHoveredItem("UI")}
                item
                xs={12}
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
                  <SecondaryButton
                    link="/services/ux-ui"
                    btnText="Learn More"
                  />
                </Box>
              </Grid>
              {!smallScreenSize && (
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
              )}
            </>
          ) : (
            <Grid item xs={12} sx={uxContainer}>
              <Typography sx={[hoveredTitle, uxHoveredTitle]}>
                UX/UI Design
              </Typography>
              {/* <Stack direction="row" spacing={8}>
                <Box sx={subTitle}>Research</Box>
                <Box sx={subTitle}>Design</Box>
                <Box sx={subTitle}>Prototyping</Box>
                <Box sx={subTitle}>Testing</Box>
              </Stack> */}
              <Box sx={{ marginTop: "60px" }}>
                <SecondaryButton link="/services/ux-ui" btnText="Learn More" />
              </Box>
            </Grid>
          )}
        </>
      ) : (
        hoveredItem === "Development" && (
          <>
            {!smallScreenSize ? (
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
                <Grid item xs={12} md={11} sx={developmentContainer}>
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
                      link="/services/development"
                      btnText="Learn More"
                    />
                  </Box>
                </Grid>
              </>
            ) : (
              <Grid item xs={12} sx={developmentContainer}>
                <Typography sx={[hoveredTitle, developmentHoveredTitle]}>
                  Development
                </Typography>
                {/* <Stack direction="row" spacing={8}>
                  <Box sx={developmentSubTitle}>Research</Box>
                  <Box sx={developmentSubTitle}>Design</Box>
                  <Box sx={developmentSubTitle}>Prototyping</Box>
                  <Box sx={developmentSubTitle}>Testing</Box>
                </Stack> */}
                <Box sx={{ marginTop: "60px" }}>
                  <SecondaryButton
                    link="/services/development"
                    btnText="Learn More"
                  />
                </Box>
              </Grid>
            )}
          </>
        )
      )}
    </Grid>
  );
};

export default Services;
