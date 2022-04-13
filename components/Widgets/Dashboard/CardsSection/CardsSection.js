import { Grid } from "@mui/material";
import CustomCard from "../../../UI/Card/Card";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const CardsSection = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <h1>Delivering Software Engineering Excellence</h1>
          <p>
            We are a custom software development company that identifies the gap
            and opportunities, and crafts web, mobile and IoT based solutions
            that help you disrupt, attain efficiency & accelerated business
            performance.
          </p>
        </Grid>
        <Grid item xs={4}>
          <CustomCard
            title={"Software Product Menager"}
            content={
              "We are software craftsman building scalable products users love to"
            }
            image={AppSettingsAltIcon}
          />
        </Grid>
        <Grid item xs={4}>
          <CustomCard
            image={AcUnitIcon}
            title={"Software Product Menager"}
            content={
              "We are software craftsman building scalable products users love to"
            }
          />
        </Grid>
        <Grid item xs={4}>
          <CustomCard
            image={AcUnitIcon}
            title={"Software Product Menager"}
            content={
              "We are software craftsman building scalable products users love to"
            }
          />
        </Grid>
        <Grid item xs={4}>
          <CustomCard
            image={AcUnitIcon}
            title={"Software Product Menager"}
            content={
              "We are software craftsman building scalable products users love to"
            }
          />
        </Grid>
        <Grid item xs={4}>
          <CustomCard
            image={AcUnitIcon}
            title={"Software Product Menager"}
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
