import { Container, Grid, Typography } from "@mui/material";
import ServicesFeature from "../../components/Widgets/ServicesFeature/ServicesFeature";
import classes from "./ourWork.module.css";

const OurWork = () => {
  return (
    <Grid container>
      <Grid className={classes.ourWorkHeading}>
        <Typography variant="h2">Our Work</Typography>
        <Typography>
          Creating exciting, new digital experiences and helping startups and
          SMBs disrupt and innovate across a range of industries.
        </Typography>
      </Grid>
      <Grid>
        <ServicesFeature
          imageUrl={
            "https://cdn.pixabay.com/photo/2022/04/19/08/32/relax-7142183_1280.jpg"
          }
          className={classes}
          title={"Anant Macedonia"}
          description={"This is our first project"}
        />
        <ServicesFeature
          imageUrl={
            "https://cdn.pixabay.com/photo/2022/04/19/08/32/relax-7142183_1280.jpg"
          }
          className={classes}
          title={"Anant Macedonia"}
          description={"This is our first project"}
        />
        <ServicesFeature
          imageUrl={
            "https://cdn.pixabay.com/photo/2022/04/19/08/32/relax-7142183_1280.jpg"
          }
          className={classes}
          title={"Anant Macedonia"}
          description={"This is our first project"}
        />
      </Grid>
    </Grid>
  );
};

export default OurWork;
