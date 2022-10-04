import { Grid, Typography, Link, Box, Divider, Container } from "@mui/material";
import Image from "next/image";
import classes from "./footer.module.css";
import logo from "../../../../public/footer-logo.png";
import { AiOutlineGithub, AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { contactText, linkText } from "./footerStyles";

const Footer = () => {
  return (
    <Container>
      <Grid
        container
        spacing={4}
        className={classes.footer}
        sx={{ justifyContent: "space-between" }}
      >
        <Grid
          item
          xs={12}
          sx={{
            marginBottom: "20px",

            maxHeight: "125px",
          }}
        >
          <Image src={logo} alt="anant.mk logo" />
        </Grid>
        <Grid item xs={6} md={2.7}>
          <Typography
            variant="h6"
            sx={{
              marginBottom: "25px",
              fontSize: "22px",
              fontWeight: 600,
              letterSpacing: "0.15em",
            }}
          >
            Anant Macedonia
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              letterSpacing: " -0.04em",
              fontWeight: 400,
              lineHeight: "20x",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            mollis lectus id quam posuere ultrices. Donec magna metus, porttitor
            in enim sed, vestibulum eleifend purus. Morbi mauris orci, mollis
            non enim vitae, euismod pellentesque
          </Typography>
        </Grid>
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
          <Link>
            <Typography sx={linkText}>Portfolio</Typography>
          </Link>
          <Link>
            <Typography sx={linkText}>Contact Us</Typography>
          </Link>
        </Grid>
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
        <Grid item xs={6} md={3}>
          <Box>
            <Typography
              variant="h6"
              sx={{ marginBottom: "25px", fontSize: "22px", fontWeight: 600 }}
            >
              Contact
            </Typography>
            <Typography sx={contactText}>info@anantmacedonia.mk</Typography>
            <Typography sx={contactText}>0038970 333 333</Typography>
            <Typography sx={contactText}>0038970 333 333</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "space-between", paddingBottom: "50px" }}
      >
        <Grid item xs={6} md={5}>
          <Typography
            sx={{ fontSize: "18px", display: "flex", alignItems: "center" }}
          >
            <AiOutlineCopyrightCircle style={{ marginRight: "10px" }} />{" "}
            Copyright - Anant Macedonia, Skopje 2022
          </Typography>
        </Grid>
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
      </Grid>
    </Container>
  );
};

export default Footer;
