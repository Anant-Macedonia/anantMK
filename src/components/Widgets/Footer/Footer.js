import {
  Grid,
  Typography,
  Link,
  Box,
  Divider,
  Container,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import classes from "./footer.module.css";
import logo from "../../../../public/footer-logo.png";
import { AiOutlineGithub, AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import {
  contactText,
  footerCompanyName,
  footerCompanyNameContainer,
  footerContact,
  footerContactInfoContainer,
  footerContainer,
  footerCopyright,
  footerLogo,
  footerTrademark,
  linkText,
} from "./footerStyles";

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

const Footer = () => {
  const smallScreenSize = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container>
      <Grid container sx={footerContainer}>
        <Grid item xs={3} md={12} sx={footerLogo}>
          <Image src={logo} alt="anant.mk logo" height={58} width={63} />
        </Grid>
        <Grid item xs={9} md={2.7} sx={footerCompanyNameContainer}>
          <Typography variant="h6" sx={footerCompanyName}>
            Anant Macedonia
          </Typography>
          {!smallScreenSize && (
            <Typography
              sx={{
                fontSize: "16px",
                letterSpacing: " -0.04em",
                fontWeight: 400,
                lineHeight: "20x",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              mollis lectus id quam posuere ultrices. Donec magna metus,
              porttitor in enim sed, vestibulum eleifend purus. Morbi mauris
              orci, mollis non enim vitae, euismod pellentesque
            </Typography>
          )}
        </Grid>

        {!smallScreenSize && (
          <Grid item xs={6} md={1.8}>
            <Typography
              variant="h6"
              sx={{ marginBottom: "25px", fontSize: "22px", fontWeight: 600 }}
            >
              Browse
            </Typography>
            <Link>
              <Typography sx={linkText}>Our Company</Typography>
            </Link>
            <Link>
              <Typography sx={linkText}>Services</Typography>
            </Link>
            {/* <Link>
              <Typography sx={linkText}>Portfolio</Typography>
            </Link> */}
            <Link>
              <Typography sx={linkText}>Contact Us</Typography>
            </Link>
          </Grid>
        )}

        {!smallScreenSize && (
          <Grid item xs={6} md={1.8}>
            <Typography
              variant="h6"
              sx={{ marginBottom: "25px", fontSize: "22px", fontWeight: 600 }}
            >
              Services
            </Typography>
            <Link>
              <Typography sx={linkText}>UX/UI Design</Typography>
            </Link>
            <Link>
              <Typography sx={linkText}>Development</Typography>
            </Link>
          </Grid>
        )}
        <Grid item xs={7} md={3} sx={footerContactInfoContainer}>
          <Box>
            <Typography sx={footerContact}>CONTACT INFO</Typography>
            <Typography sx={contactText}>
              stefan.nikolovski@bilans.dev
            </Typography>
            <Typography sx={contactText}>+1 702-595-2344</Typography>
          </Box>
        </Grid>
        {smallScreenSize && (
          <Grid item xs={5} md={3} sx={{ marginTop: "30px" }}>
            <Typography sx={footerContact}>FOLLOW US</Typography>
            <Box>
              <Typography>
                <AiOutlineGithub style={{ marginRight: "8px" }} />
                GitHub
              </Typography>
              <Typography>
                <BsLinkedin style={{ marginRight: "8px" }} />
                LinkedIn
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "space-between", paddingBottom: "50px" }}
      >
        <Grid item xs={12} md={5}>
          <Typography sx={footerCopyright}>
            <AiOutlineCopyrightCircle style={{ marginRight: "10px" }} /> 2022
            Anant MK, All Rights Reserved.
          </Typography>
          <Typography sx={footerTrademark}>
            All logos, trademarks and registered trademarks are the property of
            their respective owners.
          </Typography>
        </Grid>
        {!smallScreenSize && (
          <Grid item xs={6} md={3} sx={{ paddingLeft: "0" }}>
            <Typography
              sx={{
                fontSize: "22px",
              }}
            >
              Folow Us <AiOutlineGithub style={{ marginLeft: "30px" }} />
              <BsLinkedin style={{ marginLeft: "12px" }} />
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Footer;
