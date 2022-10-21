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
import { Pagination, Navigation, Autoplay } from "swiper";

import kire from "../../../../../public/kire1.png";
import petar from "../../../../../public/petar.png";
import stefan from "../../../../../public/stefan.png";

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
    { name: "Stefan Nikolovski", profileImage: stefan },
    { name: "Kire Zdraveski", profileImage: kire },
    { name: "Petar Gjuzelov", profileImage: petar },
    { name: "Tijana Conevska", profileImage: kire },
    { name: "Tom Trajceski", profileImage: kire },
  ];
  return (
    <Container sx={{ marginTop: "105px" }}>
      <Typography sx={teamSectionTitle}>Meet Our Team...</Typography>

      <Swiper
        slidesPerView={3}
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
                  <Box
                    sx={{
                      height: "336px",
                      width: "300px",
                    }}
                  >
                    <Image
                      src={data.profileImage}
                      width={300}
                      height={336.53}
                      style={{ borderTopRightRadius: "20px" }}
                    />
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
