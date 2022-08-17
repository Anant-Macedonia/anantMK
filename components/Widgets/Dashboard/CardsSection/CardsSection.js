import { Container, Grid } from "@mui/material";
import CustomCard from "../../../UI/Card/Card";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";

const CardsSection = ({ cardsData }) => {
  return (
    <Container>
      <Grid container mt={6}>
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
    </Container>
  );
};

export default CardsSection;
