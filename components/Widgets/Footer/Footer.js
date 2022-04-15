import {
  Grid,
  Typography,
  Container,
  Toolbar,
  AppBar,
  Link,
} from "@mui/material";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <Grid className={classes.footer}>
      <Grid container className={classes.footerHeader}>
        <Grid item xs={6}>
          <Typography>Anant Macedonia</Typography>
        </Grid>
        <Grid item xs={6} className={classes.footerMail}>
          <Typography>EMAIL: info@anant.mk</Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.footerNavigation}>
        <Grid item xs={6}>
          <Grid>
            <Link href="/">Home </Link> |<Link href="/"> About Us </Link> |
            <Link href="/"> Industries </Link> |
            <Link href="/"> Success Stories </Link>
          </Grid>
          <Grid className={classes.footerNavigationTerms}>
            <Typography gutterBottom>
              © 2022 Anant Macedonia. All Rights Reserved.
            </Typography>
            <Link href="/">Terms & Conditions </Link> |
            <Link href="/"> Privacy Policy </Link> |
            <Link href="/"> Cookie Policy </Link>
          </Grid>
        </Grid>
        <Grid item xs={6} className={classes.footerWorkPolicy}>
          <Link href="/"> Work Policy </Link> | <Link href="/"> Careers </Link>{" "}
          |<Link href="/"> Blog </Link> | <Link href="/"> Contact </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
