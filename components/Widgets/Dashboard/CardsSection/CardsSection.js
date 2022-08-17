import { Container, Grid } from "@mui/material";
import CustomCard from "../../../UI/Card/Card";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";

const CardsSection = ({ cardsData }) => {
  return (
    <Container>
      <Grid container spacing={2} mt={6}>
        {cardsData.map((data) => {
          return (
            <Grid item xs={12} md={6} key={data.acfHomeCardFields.title}>
              <CustomCard
                target={data.acfHomeCardFields.buttonLink.target}
                buttonText={data.acfHomeCardFields.buttonLink.title}
                link={data.acfHomeCardFields.buttonLink.url}
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
