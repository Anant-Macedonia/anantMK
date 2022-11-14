import {
  Box,
  Container,
  Grid,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
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
import contactImage from "../../../../../public/talk-us.svg";

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
  primaryButtonLink,
  secondaryButtonLink,
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  const smallScreenSize = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className={styles.heroContainer}>
      <Container>
        <Box sx={heroContainer}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={contactInfo ? 5 : 7.5}
              sx={
                !smallScreenSize ? { marginTop: "40px" } : { marginTop: "37px" }
              }
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
                    {contactMobile && (
                      <Typography sx={contactInfoText}>
                        <MdPhonelinkRing style={{ marginRight: "15px" }} />
                        {contactMobile}
                      </Typography>
                    )}

                    <Typography sx={contactInfoText}>
                      <MdPhonelinkRing style={{ marginRight: "15px" }} />
                      {contactPhone}
                    </Typography>
                  </Box>
                  <Box sx={{ marginTop: "42px" }}>
                    <a
                      href="https://github.com/Anant-Macedonia"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineGithub
                        size={33}
                        style={{ marginRight: "17px", color: "#EE6F57" }}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/anant-macedonia/about/?viewAsMember=true"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsLinkedin
                        size={33}
                        style={{ marginRight: "17px", color: "#EE6F57" }}
                      />
                    </a>
                  </Box>
                </>
              )}
              {buttons && (
                <Box sx={btnContainer}>
                  {buttons?.primaryButtonText && (
                    <PrimaryButton
                      btnText={buttons.primaryButtonText}
                      btnClass="btnMargin"
                      link={primaryButtonLink}
                    />
                  )}
                  {buttons?.secondaryButtonText && (
                    <OutlinedButton
                      btnText={buttons.secondaryButtonText}
                      link={secondaryButtonLink}
                    />
                  )}
                </Box>
              )}
            </Grid>
            {homeAnimation && !smallScreenSize ? (
              <Grid item md={4.5}>
                <Lottie options={defaultOptions} height={450} width={500} />
              </Grid>
            ) : (
              contactInfo && (
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
              )
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
