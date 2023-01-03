import {
  Box,
  Grid,
  Stack,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
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
  imageContainer,
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
import Router from "next/router";

import asd from "../../../public/design.svg";

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
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

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
      if (isLeftSwipe && !hoveredItem) {
        setHoveredItem("Development");
        setTimeout(() => {
          Router.push("/services/development");
        }, 500);
      }
    if (isRightSwipe && !hoveredItem) {
      setHoveredItem("UI");
      setTimeout(() => {
        Router.push("/services/ux-ui-design");
      }, 500);
    }

    if (isLeftSwipe && distance > 20 && hoveredItem === "UI") {
      setHoveredItem(null);
    }

    if (isRightSwipe && distance < 0 && hoveredItem === "Development") {
      setHoveredItem(null);
    }
  };

  const hoverItemSetter = (item) => {
    !smallScreenSize && setHoveredItem(item);
  };

  return (
    <Grid
      container
      sx={{
        marginTop: "110px",
        border: "4px solid #002b42",
      }}
    >
      <Grid
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseEnter={() => hoverItemSetter("UI")}
        item
        xs={!hoveredItem ? 6 : hoveredItem == "UI" ? 10 : 2}
        md={!hoveredItem ? 6 : hoveredItem == "UI" ? 11 : 1}
        sx={uxContainer}
      >
        <Typography
          sx={
            hoveredItem == "Development"
              ? [smallContainer, smallUxContainer]
              : [title, uxTitle]
          }
        >
          {!smallScreenSize ? "UX/UI Design" : "UX/UI"}
        </Typography>

        {!smallScreenSize && !hoveredItem ? (
          <Box sx={imageContainer}>
            <Image src={uxImage} alt="ux-image" />
          </Box>
        ) : (
          smallScreenSize && (
            <Box sx={{ marginTop: "35px" }}>
              <FiArrowRightCircle size="33px" color="#145374" />
            </Box>
          )
        )}
      </Grid>
      <Grid
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseEnter={() => hoverItemSetter("Development")}
        item
        xs={!hoveredItem ? 6 : hoveredItem == "Development" ? 10 : 2}
        md={!hoveredItem ? 6 : hoveredItem == "Development" ? 11 : 1}
        sx={developmentContainer}
      >
        <Typography
          sx={
            hoveredItem == "UI"
              ? [smallContainer, smallDevelopmentContainer]
              : [title, developTitle]
          }
        >
          {!smallScreenSize ? "Development" : "Dev"}
        </Typography>

        {!smallScreenSize && !hoveredItem ? (
          <Box sx={imageContainer}>
            <Image src={developImage} alt="dev-image" />
          </Box>
        ) : (
          smallScreenSize && (
            <Box sx={{ marginTop: "35px" }}>
              <FiArrowLeftCircle size="33px" color="#EE6F57" />
            </Box>
          )
        )}
      </Grid>
    </Grid>
  );
};

export default Services;
