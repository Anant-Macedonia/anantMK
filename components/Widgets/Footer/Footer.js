import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Grid, Typography, Container } from "@mui/material";

// import { , , FaLinkedinIn } from "react-icons/fa";
import {
  MdOutlineAlternateEmail,
  MdOutlineFacebook,
  MdOutlineLocationOn,
} from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import FooterLogo from "../../../public/anant-logo-footer.svg";
import classes from "./footer.module.css";
import NewsLetterBox from "./NewsLetter";

const Footer = () => {
  return (
    <Grid container spacing={4} className={classes.footerContainer}>
      <Grid item xs={12}>
        <NewsLetterBox />
      </Grid>
      <Container maxWidth="lg" className={classes.footerItemsContainer}>
        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <Grid className={classes.footerLinksHeader}>
              <Typography variant="h4">Contact Info</Typography>
            </Grid>
            <Typography gutterBottom>
              <MdOutlineLocationOn /> 3 Washington Circle NW Suite 301 - <br />
              Washington, D.C. 20037
            </Typography>
            <Typography gutterBottom>
              <MdOutlineAlternateEmail /> support@anant.us
            </Typography>
            <Typography>
              <BsTelephone /> (855) 262-6526
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Grid className={classes.footerLinksHeader}>
              <Typography variant="h4">Resources</Typography>
            </Grid>
            <Grid>
              <a
                href="https://anant.us/services/"
                target="_blank"
                rel="noreferrer"
              >
                <Typography gutterBottom>Services</Typography>
              </a>
              <a
                href="https://careers.anant.us/jobs/Careers"
                target="_blank"
                rel="noreferrer"
              >
                <Typography gutterBottom>Careers</Typography>
              </a>
              <a
                href="https://anant.us/events/"
                target="_blank"
                rel="noreferrer"
              >
                <Typography gutterBottom>Events</Typography>
              </a>
              <Link href="/contact">
                <Typography>Contact Us</Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Grid className={classes.footerLinksHeader}>
              <Typography variant="h4">Properties</Typography>
            </Grid>
            <Grid>
              <a href="https://blog.anant.us/" target="_blank" rel="noreferrer">
                <Typography gutterBottom>Blog</Typography>
              </a>
              <Link href="/">
                <Typography gutterBottom>Cassandra.Link</Typography>
              </Link>
              <Link href="/cassandra.toolkit">
                <Typography gutterBottom>Cassandra.Tools</Typography>
              </Link>
              <a
                href="https://playbook.anant.us/"
                target="_blank"
                rel="noreferrer"
              >
                <Typography gutterBottom>Anant Playbook</Typography>
              </a>
              <Link href="/awesome">
                <Typography>Awesome Cassandra</Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Grid className={classes.footerLinksHeader}>
              <Typography variant="h4">Follow Us</Typography>
            </Grid>
            <Grid>
              <Typography gutterBottom>
                <AiFillGithub className={classes.githubIcon} />
                <a
                  href="https://github.com/Anant"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </Typography>

              <Typography gutterBottom>
                <AiFillYoutube className={classes.youtubeIcon} />
                <a
                  href="https://www.youtube.com/c/AnantCorp"
                  target="_blank"
                  rel="noreferrer"
                >
                  Youtube
                </a>
              </Typography>

              <Typography gutterBottom>
                <AiOutlineTwitter className={classes.twitterIcon} />
                <a
                  href="https://twitter.com/anantcorp"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </Typography>

              <Typography gutterBottom>
                <AiFillLinkedin className={classes.linkedinIcon} />
                <a
                  href="https://www.linkedin.com/company/anant/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </Typography>

              <Typography gutterBottom>
                <MdOutlineFacebook className={classes.facebookIcon} />
                <a
                  href="https://www.facebook.com/AnantCorp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.footerLogoContainer}>
          <a href="https://anant.us" target="_blank" rel="noreferrer">
            <Image src={FooterLogo} alt="anant.us" />
          </a>
          <Grid>
            <Typography gutterBottom>
              © 2022 Anant Corporation, All Rights Reserved.
            </Typography>
          </Grid>
          <Grid>
            <Link href="/copyright">
              <Typography variant="caption">
                All logos, trademarks and registered trademarks are the property
                of their respective owners.
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Footer;
