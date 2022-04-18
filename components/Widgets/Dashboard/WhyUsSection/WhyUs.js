import { Container, Grid, Typography } from "@mui/material";
import classes from "./whyUs.module.css";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { ClickButton } from "../../../UI/Button/Button";

const WhyUs = ({ buttonText }) => {
  return (
    <Grid container className={classes.whyUs}>
      <Grid item xs={12} className={classes.whyUsHeader}>
        <Typography variant="h2" gutterBottom>
          Why Finoit will be a great fit for your software development
        </Typography>
        <Typography>
          10 years of experience and best practices that help us deliver perfect
          products and exceeds your expectations. Top-rated amongst custom
          software development companies for following reasions:
        </Typography>
      </Grid>
      <Grid container className={classes.whyUsContent}>
        <Grid item xs={4} className={classes.whyUsItems}>
          <CelebrationIcon fontSize="large" color="primary" />
          <Typography variant="h4" gutterBottom>
            Startup Thinking
          </Typography>
          <Typography>
            Nimble, agile, and proactive. Having built and helped over 100
            startups, we know what it takes.
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.whyUsItems}>
          <CelebrationIcon fontSize="large" color="primary" />
          <Typography variant="h4" gutterBottom>
            Partner Approach
          </Typography>
          <Typography>
            {
              "We are driven by 'Customer success' culture and don't think of ourselves as a service provider but your technology partner."
            }
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.whyUsItems}>
          <CelebrationIcon fontSize="large" color="primary" />
          <Typography variant="h4" gutterBottom>
            Product Mindset
          </Typography>
          <Typography>
            We are product people, and product-market fit, customer needs, time
            to market and break-even keep popping in our head when discussing.
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.whyUsItems}>
          <CelebrationIcon fontSize="large" color="primary" />
          <Typography variant="h4" gutterBottom>
            Experience Design Thinking
          </Typography>
          <Typography>
            Ease of use, right information flow, delightful experience and
            conversion are the core of our UX methodology.
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.whyUsItems}>
          <CelebrationIcon fontSize="large" color="primary" />
          <Typography variant="h4" gutterBottom>
            Hiring Philosophy
          </Typography>
          <Typography>
            Hire the best and suffer less is what we follow. Top teams need
            least hand-holding to deliver flawless products.
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.whyUsItems}>
          <CelebrationIcon fontSize="large" color="primary" />
          <Typography variant="h4" gutterBottom>
            Certified Teams and Company
          </Typography>
          <Typography>
            Our teams are not only experienced in respective technologies but
            also certified.
          </Typography>
        </Grid>
        {buttonText && (
          <Grid item xs={12} className={classes.btn}>
            <ClickButton buttonText={buttonText} />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default WhyUs;
