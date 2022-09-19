import Image from "next/future/image";
import { Box, Container, Grid, Typography } from "@mui/material";
import heroImage from "../../../../../public/Hero-img.png";

import {
  ourApproachDesc,
  ourApproachImageContainer,
  ourApproachSubtitle,
  ourApproachTitle,
  ourApproachContainer,
} from "./ourApproachStyle";

const OurApproach = ({ heroData, primaryBtnText, secondaryBtnText }) => {
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
        <Grid container>
          <Grid item sm={12} md={7.4} sx={{ ourApproachContainer }}>
            <Typography sx={ourApproachTitle} variant="h1">
              {heroData?.heroTitle}
              Take a look at our approach.
            </Typography>

            <Typography sx={ourApproachSubtitle} variant="h2">
              {heroData?.heroSubtitle}
              Research and Design Strategy
            </Typography>

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
          <Grid item md={4.6}>
            <Image src={heroImage} width={500} quality={100} alt="Hero Image" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurApproach;
