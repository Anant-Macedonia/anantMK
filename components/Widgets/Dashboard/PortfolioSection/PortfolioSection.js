import { Grid, Typography } from "@mui/material";
import { CustomButton } from "../../../UI/Button/Button";
import classes from "./portfolioSection.module.css";

const PortfolioSection = ({ sectionData, clients }) => {
  return (
    <Grid container className={classes.portfolio}>
      <Grid item className={classes.portfolioHeader} xs={12}>
        <Typography variant="h3" gutterBottom>
          {sectionData.title}
        </Typography>
        <Typography>{sectionData.description}</Typography>
      </Grid>
      <Grid container>
        {clients.map((client) => {
          return (
            <Grid
              item
              xs={6}
              className={classes.portfolioContent}
              key={client.clientFields.clientName}>
              <Typography variant="h3" gutterBottom>
                {client.clientFields.clientName}
              </Typography>
              <Typography paragraph>
                {client.clientFields.clientTestimonials}
              </Typography>
              <CustomButton href={"/blog"} buttonText={"Case Study"} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default PortfolioSection;
