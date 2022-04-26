import { Container, Grid, Typography } from "@mui/material";
import PagesHeader from "../../components/Widgets/PagesHeader/PagesHeader";
import classes from "./services.module.css";
import ServicesFeature from "../../components/Widgets/ServicesFeature/ServicesFeature";
import {
  mobileAppLinks,
  productConsultingLinks,
  webAppLinks,
} from "../../lib/MockData/servicesLinks";
import Form from "../../components/UI/Form/Form";

const Services = () => {
  return (
    <Grid container>
      <Grid container className={classes.servicesContainer}>
        <PagesHeader
          title={"Services"}
          description={
            "Wide range of expert services to align your IT strategy with business strategy and achieve better ROI."
          }
        />
      </Grid>
      <Container>
        <Grid container className={classes.servicesHeading}>
          <Typography variant="h5" gutterBottom>
            Finoit is a product engineering company providing strategic and
            technology consulting in the field of Web and Mobile application
            development domain.
          </Typography>
          <Typography>
            Finoit is a team of individuals with diverse functional and
            technical expertise, focused on solving complex business problems
            via building customer centric intelligent web and mobile solutions.
          </Typography>
        </Grid>
      </Container>
      <ServicesFeature
        imageUrl={
          "https://cdn.pixabay.com/photo/2021/11/09/14/01/sea-6781567_1280.jpg"
        }
        title="Web Application Development"
        description="Evolving online markets, changing market dynamics and tech-savvy consumers; have you transformed enough to gain or sustain competitive edge?"
        links={webAppLinks}
        className={classes}
      />
      <ServicesFeature
        imageUrl={
          "https://cdn.pixabay.com/photo/2021/05/29/03/00/beach-6292382_1280.jpg"
        }
        title="Mobile App Development"
        description="Mobile is changing business dynamics. Have you thought of converting Emerging Mobile Technologies into Business opportunity?"
        links={mobileAppLinks}
        className={classes}
      />
      <ServicesFeature
        imageUrl={
          "https://cdn.pixabay.com/photo/2021/10/19/09/46/nature-6723133_1280.jpg"
        }
        title="Product Consulting"
        description="With user centered approach, we help you align your IT and online strategy with business strategy to gain competitive edge and drive growth."
        links={productConsultingLinks}
        className={classes}
      />
      <Form />
    </Grid>
  );
};

export default Services;
