import { Grid } from "@mui/material";
import CustomCard from "../../../UI/Card/Card";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const CardsSection = () => {
  return (
    <>
      <Grid container spacing={2} mt={6}>
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
            link={"/software-product"}
            image={AppSettingsAltIcon}
            title={"Software Product Manager"}
            content={
              "We are software craftsman building scalable products users love to"
            }
          />
        </Grid>
        <Grid item xs={4}>
          <CustomCard
            link={"/app-development"}
            image={AcUnitIcon}
            title={"App Development"}
            content={
              "We are software craftsman building scalable products users love to"
            }
          />
        </Grid>
        <Grid item xs={4}>
          <CustomCard
            link={"/digital-transformation"}
            image={AcUnitIcon}
            title={"Digital Transformation"}
            content={
              "We are software craftsman building scalable products users love to"
            }
          />
        </Grid>
        <Grid item xs={4}>
          <CustomCard
            link={"/user-exprience"}
            image={AcUnitIcon}
            title={"User Exprience Design"}
            content={
              "We are software craftsman building scalable products users love to"
            }
          />
        </Grid>
        <Grid item xs={4}>
          <CustomCard
            link={"/technology-consulting"}
            image={AcUnitIcon}
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
