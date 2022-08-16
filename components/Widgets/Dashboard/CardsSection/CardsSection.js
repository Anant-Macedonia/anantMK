import { Grid, Typography } from "@mui/material";
import CustomCard from "../../../UI/Card/Card";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const CardsSection = ({ cardsData }) => {
  return (
    <>
      <Grid container spacing={2} mt={6}>
        {cardsData.map((data) => {
          return (
            <Grid item xs={6} key={data.acfHomeCardFields.title}>
              <CustomCard
                link={"/software-product"}
                icon={AppSettingsAltIcon}
                title={data.acfHomeCardFields.title}
                content={data.acfHomeCardFields.description}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default CardsSection;
