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

  return (
    <Grid
      onMouseLeave={() => setHoveredItem(null)}
      container
      sx={{
        marginTop: "110px",
      }}
    >
      <Grid
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseEnter={() => setHoveredItem("UI")}
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

        {!smallScreenSize && hoveredItem == "UI" && (
          <>
            <Stack direction="row" spacing={8}>
              <Box sx={subTitle}>Research</Box>
              <Box sx={subTitle}>Design</Box>
              <Box sx={subTitle}>Prototyping</Box>
              <Box sx={subTitle}>Testing</Box>
            </Stack>
            <Box sx={{ marginTop: "125px" }}>
              <SecondaryButton
                link="/services/ux-ui-design"
                btnText="Learn More"
              />
            </Box>
          </>
        )}

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
        onMouseEnter={() => setHoveredItem("Development")}
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

        {!smallScreenSize && hoveredItem == "Development" && (
          <>
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
          </>
        )}

        {!smallScreenSize && !hoveredItem ? (
          <Box sx={imageContainer}>
            <Image src={developImage} alt="ux-image" />
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

    // ) : hoveredItem === "UI" ? (
    //   <>
    //     {!smallScreenSize ? (
    //       <>
    //         <Grid
    //           onMouseEnter={() => setHoveredItem("UI")}
    //           item
    //           xs={12}
    //           md={11}
    //           sx={uxContainer}
    //         >
    //           <Typography sx={[hoveredTitle, uxHoveredTitle]}>
    //             UX/UI Design
    //           </Typography>
    //           <Stack direction="row" spacing={8}>
    //             <Box sx={subTitle}>Research</Box>
    //             <Box sx={subTitle}>Design</Box>
    //             <Box sx={subTitle}>Prototyping</Box>
    //             <Box sx={subTitle}>Testing</Box>
    //           </Stack>
    //           <Box sx={{ marginTop: "125px" }}>
    //             <SecondaryButton
    //               link="/services/ux-ui"
    //               btnText="Learn More"
    //             />
    //           </Box>
    //         </Grid>
    //         {!smallScreenSize && (
    //           <Grid
    //             onMouseEnter={() => setHoveredItem("Development")}
    //             item
    //             md={1}
    //             sx={developmentContainer}
    //           >
    //             <Typography sx={[smallContainer, smallDevelopmentContainer]}>
    //               Development
    //             </Typography>
    //           </Grid>
    //         )}
    //       </>
    //     ) : (
    //       <Grid
    //         item
    //         xs={hoveredItem == "UI" ? 12 : !hoveredItem && 0}
    //         sx={uxContainer}
    //         onTouchStart={onTouchStart}
    //         onTouchMove={onTouchMove}
    //         onTouchEnd={onTouchEnd}
    //       >
    //         <Typography sx={[hoveredTitle, uxHoveredTitle]}>
    //           UX/UI Design
    //         </Typography>
    //         <Box sx={{ marginTop: "60px" }}>
    //           <SecondaryButton link="/services/ux-ui" btnText="Learn More" />
    //         </Box>
    //       </Grid>
    //     )}
    //   </>
    // ) : (
    //   hoveredItem === "Development" && (
    //     <>
    //       {!smallScreenSize ? (
    //         <>
    //           <Grid
    //             onMouseEnter={() => setHoveredItem("UI")}
    //             item
    //             md={1}
    //             sx={uxContainer}
    //           >
    //             <Typography sx={[smallContainer, smallUxContainer]}>
    //               UX/UI Design
    //             </Typography>
    //           </Grid>
    //           <Grid item xs={12} md={11} sx={developmentContainer}>
    //             <Typography sx={[hoveredTitle, developmentHoveredTitle]}>
    //               Development
    //             </Typography>
    //             <Stack direction="row" spacing={8}>
    //               <Box sx={developmentSubTitle}>Research</Box>
    //               <Box sx={developmentSubTitle}>Design</Box>
    //               <Box sx={developmentSubTitle}>Prototyping</Box>
    //               <Box sx={developmentSubTitle}>Testing</Box>
    //             </Stack>
    //             <Box sx={{ marginTop: "125px" }}>
    //               <SecondaryButton
    //                 link="/services/development"
    //                 btnText="Learn More"
    //               />
    //             </Box>
    //           </Grid>
    //         </>
    //       ) : (
    //         <Grid
    //           item
    //           xs={hoveredItem == "Development" ? 12 : !hoveredItem && 0}
    //           sx={developmentContainer}
    //           onTouchStart={onTouchStart}
    //           onTouchMove={onTouchMove}
    //           onTouchEnd={onTouchEnd}
    //         >
    //           <Typography sx={[hoveredTitle, developmentHoveredTitle]}>
    //             Development
    //           </Typography>
    //           <Box sx={{ marginTop: "60px" }}>
    //             <SecondaryButton
    //               link="/services/development"
    //               btnText="Learn More"
    //             />
    //           </Box>
    //         </Grid>
    //       )}
    //     </>
  );
};

export default Services;
