import React from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import QuoteUpImage from "../../../../public/quotes-up.png";
import QuoteDownImage from "../../../../public/quotes-down.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import classes from "./testimonialSection.module.css";

const TestimonialSection = ({ testimonialData }) => {
  return (
    <Box className={classes.testimonailSectionContainer}>
      <Grid container spacing={6}>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={100}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          className={classes.swiper}>
          {testimonialData.map((data, i) => {
            return (
              <SwiperSlide className={classes.swiperSlide} key={i}>
                {({ isActive }) => (
                  <>
                    <Box
                      className={
                        isActive
                          ? `${classes.quotesUpImageActive}`
                          : `${classes.quotesUpImageNoActive}`
                      }>
                      <Image
                        width={65}
                        height={45}
                        src={QuoteUpImage}
                        alt="quotes"
                      />
                    </Box>

                    <Grid
                      className={
                        isActive
                          ? `${classes.testimonialContainerActive}`
                          : `${classes.testimonialContainerNoActive}`
                      }
                      item
                      key={i}>
                      <Box className={classes.testimonialCardHeader}>
                        <Box className={classes.imageContainer}>
                          <Image
                            width={100}
                            height={100}
                            alt={data.acfTestimonialCardFields.clientName}
                            src={
                              data.acfTestimonialCardFields.clientImage
                                .sourceUrl
                            }
                          />
                        </Box>
                        <Box>
                          <Typography
                            variant="h4"
                            className={classes.clientName}>
                            {data.acfTestimonialCardFields.clientName}
                          </Typography>
                          <Typography
                            variant="h5"
                            className={classes.clientJobPosition}>
                            {data.acfTestimonialCardFields.clientJobPosition}
                          </Typography>
                        </Box>
                      </Box>

                      <Typography
                        variant="h5"
                        className={classes.testimonialText}>
                        {data.acfTestimonialCardFields.testamonialText}
                      </Typography>
                    </Grid>
                    <Box className={classes.quotesDownImage}>
                      <Image
                        width={65}
                        height={45}
                        src={QuoteDownImage}
                        alt="quotes"
                      />
                    </Box>
                  </>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Grid>
      <Box className={classes.readBlogContainer}>
        <Typography>Read our blog</Typography>
        <Button className={classes.btn} variant="contained">
          Check Out Now
        </Button>
      </Box>
    </Box>
  );
};

export default TestimonialSection;
