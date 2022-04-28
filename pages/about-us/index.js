import { gql } from "@apollo/client";
import { Container, Grid, Typography } from "@mui/material";
import { client } from "../../lib/apollo";
import classes from "./aboutUs.module.css";

const AboutUs = ({ page }) => {
  return (
    <Grid>
      <Container>
        <Typography className={classes.aboutUsHeading} variant="h2">
          {page.title}
        </Typography>
        <Grid
          className={classes.contentContainer}
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      </Container>
    </Grid>
  );
};

export async function getStaticProps() {
  const result = await client.query({
    query: gql`
      query GetPage {
        pageBy(uri: "/about-us") {
          title
          content
        }
      }
    `,
  });

  return {
    props: {
      page: result.data.pageBy,
    },
  };
}

export default AboutUs;
