import { Grid, Typography } from "@mui/material";
import CustomCard from "../../../UI/Card/Card";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const CardsSection = () => {
  return (
    <>
      <Grid container spacing={2} mt={6}>
        <Grid item xs={4}>
          <Typography variant="h2" gutterBottom>
            Delivering Software Engineering Excellence
          </Typography>
          <Typography gutterBottom>
            We are a custom software development company that identifies the gap
            and opportunities, and crafts web, mobile and IoT based solutions
            that help you disrupt, attain efficiency & accelerated business
            performance.
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <CustomCard
            link={"/software-product"}
            icon={AppSettingsAltIcon}
            title={"Software Product Manager"}
            content={
              "We are software craftsman building scalable products users love to"
            }
          />
        </Grid>
        <Grid item xs={4}>
          <CustomCard
            link={"/app-development"}
            icon={AcUnitIcon}
            title={"App Development"}
            content={
              "We are software craftsman building scalable products users love to"
            }
          />
        </Grid>
        <Grid item xs={4}>
          <CustomCard
            link={"/digital-transformation"}
            icon={AcUnitIcon}
            title={"Digital Transformation"}
            content={
              "We are software craftsman building scalable products users love to"
            }
          />
        </Grid>
        <Grid item xs={4}>
          <CustomCard
            link={"/user-exprience"}
            icon={AcUnitIcon}
            title={"User Exprience Design"}
            content={
              "We are software craftsman building scalable products users love to"
            }
          />
        </Grid>
        <Grid item xs={4}>
          <CustomCard
            link={"/technology-consulting"}
            icon={AcUnitIcon}
            title={"Technology Consulting"}
            content={
              "We are software craftsman building scalable products users love to"
            }
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CardsSection;
