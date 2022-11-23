import Image from "next/future/image";
import { useState } from "react";
import React from "react";
import {
  Box,
  Container,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  imageContainer,
  nameContainer,
  teamCardContainerActive,
  teamCardContainerNoActive,
  teamCardTitle,
  teamSectionContainer,
  teamSectionDescription,
  teamSectionTitle,
} from "./ourTeamStyle.js";
import classes from "./ourTeam.module.css";

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

const OurTeamSection = ({ teamMembers }) => {
  const smallScreenSize = useMediaQuery(theme.breakpoints.down("sm"));
  const [projectNum, setProjectNum] = useState(0);

  return (
    <Container sx={teamSectionContainer}>
      {!smallScreenSize && (
        <Typography sx={teamSectionDescription}>
          We are group of developers and deisgners based in Macedonia. We are
          extremely passionate and committed to what we do since we love and
          enjoy our work. Through our products, we aim to reflect that exact
          same energy to our clients and users. We help business owners to carry
          out their ideas and visions. We define our success by our people. We
          believe in your success and we believe our people are well-equipped to
          bring your operations to the next level. Our business objective is to
          help you meet your business objectives.
        </Typography>
      )}

      <Typography sx={teamSectionTitle}>Meet Our Team.</Typography>

      <Swiper
        slidesPerView={!smallScreenSize ? 3 : 1}
        spaceBetween={120}
        slidesPerGroup={1}
        centeredSlides={true}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 5000 }}
        modules={[Pagination, Navigation, Autoplay]}
        className={classes.swiper}
      >
        {teamMembers.map((data, i) => {
          return (
            <SwiperSlide className="swiperSlide" key={i}>
              {({ isActive }) => (
                <Box
                  sx={
                    isActive
                      ? teamCardContainerActive
                      : teamCardContainerNoActive
                  }
                >
                  <Box sx={imageContainer}>
                    <Image
                      src={data.teamMemberFields.image.sourceUrl}
                      width={!smallScreenSize ? 300 : 210}
                      height={!smallScreenSize ? 336.53 : 233}
                      style={{ borderTopRightRadius: "20px" }}
                      alt=""
                    />
                  </Box>

                  <Box sx={nameContainer}>
                    <Typography sx={teamCardTitle}>
                      {data.teamMemberFields.fullName}
                    </Typography>
                  </Box>
                </Box>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default OurTeamSection;
