import { gql } from "@apollo/client";
import { Container, Grid, Typography } from "@mui/material";
import { client } from "../../lib/apollo";
import classes from "./termsConditions.module.css"

const TermsConditions = ({ page }) => {
  return (
    <Grid>
      <Container>
        <Typography className={classes.termsConditionsHeading} variant="h2">{page.title}</Typography>
        <Grid dangerouslySetInnerHTML={{ __html: page.content }} />
      </Container>
    </Grid>
  );
};

export async function getStaticProps() {
  const result = await client.query({
    query: gql`
      query GetPage {
        pageBy(uri: "/terms-and-conditions") {
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

export default TermsConditions;
