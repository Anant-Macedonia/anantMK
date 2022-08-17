import { gql } from "@apollo/client";
import { Container, Grid, TableContainer, Typography } from "@mui/material";
import { client } from "../../lib/apollo";
import classes from "./privacyPolicy.module.css";

const PrivacyPolicy = ({ page }) => {
  return (
    <Grid>
      <Container>
        <Typography className={classes.privacyPolicyHeading} variant="h2">
          {page.title}
        </Typography>
        <Grid dangerouslySetInnerHTML={{ __html: page.content }} />
      </Container>
    </Grid>
  );
};

export async function getStaticProps() {
  const result = await client.query({
    query: gql`
      query GetPage {
        pageBy(uri: "/privacy-policy") {
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

export default PrivacyPolicy;
