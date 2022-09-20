import Image from "next/future/image";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
// import circleImage from "../../../../../public/CircleGroup.svg"
import circleImage from "../../../../../public/circle.svg";
import ellipseImage from "../../../../../public/ellipse.svg";
import styles from "./ourApproach.module.css";

import {
  ourApproachDesc,
  ourApproachImageContainer,
  ourApproachSubtitle,
  ourApproachTitle,
  ourApproachContainer,
} from "./ourApproachStyle";
import { useEffect, useRef, useState } from "react";

const OurApproach = ({ heroData, primaryBtnText, secondaryBtnText }) => {
  const [imageClass, setImageClass] = useState("ellipseImage1");
  const [num, setNum] = useState(1);

  // useEffect(() => {
  //   function changeImg() {
  //     setTimeout(() => {
  //       if (num === 1) {
  //         setNum(2);
  //         setImageClass(`ellipseImage2`);
  //       } else if (num < 4) {
  //         setNum((prevNum) => prevNum + 1);
  //         setImageClass(`ellipseImage${num + 1}`);
  //       } else {
  //         setNum(1);
  //         setImageClass(`ellipseImage1`);
  //       }
  //     }, "5000");
  //   }
  //   changeImg();
  // }, [num]);

  const css = imageClass
    .trim()
    .split(" ")
    .map((c) => styles[c])
    .join(" ");

  const clickHandler = () => {
    if (num === 1) {
      setNum(2);
      setImageClass(`ellipseImage2`);
    } else if (num < 4) {
      setNum((prevNum) => prevNum + 1);
      setImageClass(`ellipseImage${num + 1}`);
    } else {
      setNum(1);
      setImageClass(`ellipseImage1`);
    }
  };
  return (
    <Box
      sx={{
        paddingTop: "150px",
        paddingBottom: "280px",
        backgroundColor: "#145374",
        marginBottom: "150px",
      }}
    >
      <Container>
        <Grid container spacing={8}>
          <Grid item sm={12} md={7.6} sx={{ ourApproachContainer }}>
            <Typography sx={ourApproachTitle} variant="h1">
              {heroData?.heroTitle}
              Take a look at our approach.
            </Typography>

            {num == 1 && (
              <Typography sx={ourApproachSubtitle} variant="h2">
                {heroData?.heroSubtitle}
                Research and Design Strategy
              </Typography>
            )}
            {num == 2 && (
              <Typography sx={ourApproachSubtitle} variant="h2">
                {heroData?.heroSubtitle}
                Design Thinking Methodology
              </Typography>
            )}
            {num == 3 && (
              <Typography sx={ourApproachSubtitle} variant="h2">
                {heroData?.heroSubtitle}
                Product Development
              </Typography>
            )}
            {num == 4 && (
              <Typography sx={ourApproachSubtitle} variant="h2">
                {heroData?.heroSubtitle}
                Product Testing
              </Typography>
            )}

            <Typography sx={ourApproachDesc} variant="h3">
              {heroData?.heroDescription}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              mollis lectus id quam posuere ultrices. Donec magna metus,
              porttitor in enim sed, vestibulum eleifend purus. Morbi mauris
              orci, mollis non enim vitae, euismod pellentesque mauris. Quisque
              id tincidunt quam, id sodales lectus. Nullam quis leo ex. Mauri
              quis dolor rutrum sem interdum scelerisque sed a neque.
            </Typography>
          </Grid>
          <Grid item md={4.4} sx={{ marginTop: "30px" }}>
            <Image
              src={ellipseImage}
              quality={100}
              alt="Hero Image"
              className={`${css}`}
            />

            <Image
              src={circleImage}
              quality={100}
              alt="Hero "
              className={styles.approachImage}
            />
            <Button variant="contained" onClick={() => clickHandler()}>
              +
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurApproach;
