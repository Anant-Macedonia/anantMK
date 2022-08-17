import React, { useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import classes from "./enterpriseSection.module.css";

const EnterpriseSection = ({ enterpriseData, enterpriseCardData }) => {
  return (
    <Box className={classes.enterpriseContainer}>
      <Typography className={classes.enterpriseSectionTitle} variant="h1">
        {enterpriseData.enterpriseSectionTitle}
      </Typography>
      <Grid container className={classes.swiperContainer}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={1}
          centeredSlides={true}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={classes.swiper}>
          {enterpriseCardData.map((data, i) => {
            return (
              <SwiperSlide className="swiperSlide" key={i}>
                {({ isActive }) => (
                  console.log("Enter", isActive),
                  (
                    <Grid
                      item
                      key={i}
                      className={
                        isActive
                          ? `${classes.enterpriseCardContainerActive}`
                          : `${classes.enterpriseCardContainerNoActive}`
                      }>
                      <Box className={classes.imageContainer}>
                        <img
                          className={classes.enterpriseImage}
                          src={
                            data.enterpriseCardFields.enterpriseImage.sourceUrl
                          }
                          alt={data.enterpriseCardFields.enterpriseTitle}
                        />
                      </Box>

                      <Typography
                        variant="h4"
                        className={classes.enterpriseTitle}>
                        {data.enterpriseCardFields.enterpriseTitle}
                      </Typography>
                      <Typography className={classes.enterpriseDescription}>
                        {data.enterpriseCardFields.enterpriseDescription}
                      </Typography>
                    </Grid>
                  )
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Grid>
    </Box>
  );
};

export default EnterpriseSection;
