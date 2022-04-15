import { Grid, Typography } from "@mui/material";
import CustomButton from "../../../UI/Button/Button";
import classes from "./portfolioSection.module.css";

const PortfolioSection = () => {
  return (
    <Grid container className={classes.portfolio}>
      <Grid item className={classes.portfolioHeader} xs={12}>
        <Typography variant="h3" gutterBottom>
          Success stories
        </Typography>
        <Typography>
          Behind the scenes analysis of our projects and customer
        </Typography>
      </Grid>
      <Grid container>
        <Grid item xs={6} className={classes.portfolioContent}>
          <Typography variant="h3" gutterBottom>
            2 Way
          </Typography>
          <Typography variant="h4" gutterBottom>
            Most trusted app by unions across the world.
          </Typography>
          <Typography paragraph>
            An enterprise communication solution used by unions like British
            Airways, Finnish airways and others for their 50000+ enterprise
            users.
          </Typography>
          <CustomButton href={"/category/blog"} buttonText={"Case Study"} />
        </Grid>
        <Grid item xs={6} className={classes.portfolioImage}>
          <img src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_480,h_500/https://www.finoit.com/wp-content/themes/finoit/assets/layouts/img/portfolio/home/twoway-thumb.png" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PortfolioSection;
