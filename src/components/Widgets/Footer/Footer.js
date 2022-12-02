import {
  Grid,
  Typography,
  Box,
  Container,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
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
  const smallScreenSize = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Container>
      <Grid container sx={footerContainer}>
        <Grid item xs={3} md={12} sx={footerLogo}>
          <Image src={logo} alt="anant.mk logo" height={58} width={63} />
        </Grid>
        <Grid item xs={9} md={2.7} sx={footerCompanyNameContainer}>
          <Typography sx={footerCompanyName}>Anant Macedonia</Typography>
          {!smallScreenSize && (
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "23px",
              }}
            >
              We are group of developers and deisgners based in Macedonia. We
              are extremely passionate and committed to what we do since we love
              and enjoy our work. Through our products, we aim to reflect that
              exact same energy to our clients and users. We help business
              owners to carry out their ideas and visions.
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
            <Link href="/company" passHref>
              <Typography sx={linkText}>Our Company</Typography>
            </Link>
            <Link href="/services" passHref>
              <Typography sx={linkText}>Services</Typography>
            </Link>
            {/* <Link>
              <Typography sx={linkText}>Portfolio</Typography>
            </Link> */}
            <Link href="/contact" passHref>
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
            <Link href="/services/ux-ui-design" passHref>
              <Typography sx={linkText}>UX/UI Design</Typography>
            </Link>
            <Link href="/services/development" passHref>
              <Typography sx={linkText}>Development</Typography>
            </Link>
          </Grid>
        )}
        <Grid item xs={7.5} md={3} sx={footerContactInfoContainer}>
          <Box>
            <Typography sx={footerContact}>CONTACT INFO</Typography>
            <Typography sx={contactText}>
              stefan.nikolovski@bilans.dev
            </Typography>
            <Typography sx={contactText}>+1 702-595-2344</Typography>
          </Box>
        </Grid>
        {smallScreenSize && (
          <Grid item xs={4.5} md={3} sx={{ marginTop: "30px" }}>
            <Typography sx={footerContact}>FOLLOW US</Typography>
            <Box>
              <a
                href="https://github.com/Anant-Macedonia"
                rel="noreferrer"
                aria-label="Github"
              >
                <Typography>
                  <AiOutlineGithub style={{ marginRight: "8px" }} />
                  GitHub
                </Typography>
              </a>
              <a
                href="https://www.linkedin.com/company/anant-macedonia/about/?viewAsMember=true"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Typography>
                  <BsLinkedin style={{ marginRight: "8px" }} />
                  LinkedIn
                </Typography>
              </a>
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
              Folow Us
              <a
                href="https://github.com/Anant-Macedonia"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                <AiOutlineGithub style={{ marginLeft: "30px" }} />
              </a>
              <a
                href="https://www.linkedin.com/company/anant-macedonia/about/?viewAsMember=true"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <BsLinkedin style={{ marginLeft: "12px" }} />
              </a>
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Footer;
