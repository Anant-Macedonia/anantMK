import Image from "next/future/image";
import { useState } from "react";
import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  enterpriseCardContainerActive,
  enterpriseCardContainerNoActive,
  imageContainer,
  enterpriseTitle,
  enterpriseDesc,
  teamCardContainerActive,
  teamCardContainerNoActive,
  teamCardTitle,
  teamSectionTitle,
} from "./ourTeamStyle.js";
import classes from "./ourTeam.module.css";

const OurTeamSection = () => {
  const [projectNum, setProjectNum] = useState(0);

  const teamMembers = [
    { name: "Stefan Nikolovski", image: {} },
    { name: "Kire Zdraveski", image: {} },
    { name: "Petar Gjuzelov", image: {} },
    { name: "Tijana Conevska", image: {} },
    { name: "Tom Trajceski", image: {} },
  ];
  return (
    <Container sx={{ marginTop: "105px" }}>
      <Typography sx={teamSectionTitle}>Meet Our Team...</Typography>

      <Swiper
        slidesPerView={3}
        spaceBetween={60}
        slidesPerGroup={1}
        centeredSlides={true}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
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
                  <Box
                    sx={{
                      height: "336px",
                      width: "300px",
                      backgroundColor: "yellow",
                      borderTopRightRadius: "20px",
                    }}
                  >
                    {/* <Image src={petel} width={370} height={415} /> */}
                  </Box>

                  <Box
                    sx={{
                      height: "110px",
                      width: "300px",
                      backgroundColor: "#D36B5B",
                      borderBottomRightRadius: "20px",
                    }}
                  >
                    <Typography sx={teamCardTitle}>{data.name}</Typography>
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
