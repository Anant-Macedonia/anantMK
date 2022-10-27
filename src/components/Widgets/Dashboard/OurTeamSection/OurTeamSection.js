import Image from "next/future/image";
import { useState } from "react";
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  teamCardContainerActive,
  teamCardContainerNoActive,
  teamCardTitle,
  teamSectionTitle,
} from "./ourTeamStyle.js";
import classes from "./ourTeam.module.css";

const OurTeamSection = ({ teamMembers }) => {
  const [projectNum, setProjectNum] = useState(0);

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
                      src={data.teamMemberFields.image.sourceUrl}
                      width={300}
                      height={336.53}
                      style={{ borderTopRightRadius: "20px" }}
                      alt=""
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
