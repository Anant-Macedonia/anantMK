import { Box, Container, Grid, Typography } from "@mui/material";
import Lottie from "react-lottie";
import PrimaryButton from "../../../UI/Buttons/PrimaryButton/PrimaryButton";
import OutlinedButton from "../../../UI/Buttons/OutlinedButton/OutlinedButton";
import {
  heroContainer,
  heroTitle,
  heroDesc,
  btnContainer,
  contactInfoText,
} from "./heroStyle";
import { AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { MdPhonelinkRing } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import styles from "./hero.module.css";
import animationData from "../../../../lottie/heroAnimation.json";
import Image from "next/future/image";
import developmentImage from "../../../../../public/development-service.svg";
import contactImage from "../../../../../public/talk-us.svg";

const Hero = ({
  title,
  subtitle,
  description,
  contactInfo,
  homeAnimation,
  contactEmail,
  contactMobile,
  contactPhone,
  buttons,
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <Box className={styles.heroContainer}>
      <Container>
        <Box sx={heroContainer}>
          <Grid container>
            <Grid
              item
              sm={12}
              md={contactInfo ? 5 : 7.5}
              sx={{ marginTop: "40px" }}
            >
              <Typography sx={heroTitle} variant="h1">
                {title}
                <Box variant="span" sx={{ fontWeight: 700 }}>
                  {subtitle}
                </Box>
              </Typography>
              <Box
                sx={heroDesc}
                dangerouslySetInnerHTML={{ __html: description }}
              />

              {contactInfo && (
                <>
                  <Box sx={{ marginTop: "63px" }}>
                    <Typography sx={contactInfoText}>
                      <AiOutlineMail style={{ marginRight: "15px" }} />
                      {contactEmail}
                    </Typography>
                    <Typography sx={contactInfoText}>
                      <MdPhonelinkRing style={{ marginRight: "15px" }} />
                      {contactMobile}
                    </Typography>
                    <Typography sx={contactInfoText}>
                      <MdPhonelinkRing style={{ marginRight: "15px" }} />
                      {contactPhone}
                    </Typography>
                  </Box>
                  <Box sx={{ marginTop: "42px" }}>
                    <AiOutlineGithub
                      size={33}
                      style={{ marginRight: "17px", color: "#EE6F57" }}
                    />
                    <BsLinkedin
                      size={33}
                      style={{ marginRight: "17px", color: "#EE6F57" }}
                    />
                  </Box>
                </>
              )}

              <Box sx={btnContainer}>
                {buttons?.primaryButtonText && (
                  <PrimaryButton
                    btnText={buttons.primaryButtonText}
                    btnClass="btnMargin"
                    link={buttons.primaryButtonLink.uri}
                  />
                )}
                {buttons?.secondaryButtonText && (
                  <OutlinedButton
                    btnText={buttons.secondaryButtonText}
                    link={buttons.secondaryButtonLink.uri}
                  />
                )}
              </Box>
            </Grid>
            {homeAnimation ? (
              <Grid item md={4.5}>
                <Lottie options={defaultOptions} height={450} width={500} />
              </Grid>
            ) : contactInfo ? (
              <Grid
                item
                md={7}
                sx={{
                  justifyContent: "flex-end",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Image src={contactImage} alt="development img" />
              </Grid>
            ) : (
              <Grid
                item
                md={4.5}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Image src={developmentImage} alt="development img" />
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
