import { client } from "../../lib/apollo";
import { gql } from "@apollo/client";
import { Container, Grid, Typography } from "@mui/material";
import PagesHeader from "../../components/Widgets/PagesHeader/PagesHeader";

import classes from "./technologies.module.css";
import {
  FrontEndTechnologies,
  Database,
} from "../../lib/MockData/technologiesSectionImages";
import Link from "next/link";
import TechnologyListPagesSection from "../../components/Widgets/Technologies/TechnologyListPages/TechnologyListPagesSection";
import TechnologyTypesSection from "../../components/Widgets/Technologies/TechnologyTypesSection/TechnologyTypesSection";

const TechnologiesPage = ({ pages }) => {
  return (
    <Grid>
      <Grid container className={classes.technologiesContainer}>
        <PagesHeader
          title={"Application Development Technology Solutions"}
          description={
            "As a leading software development company, we facilitate a wide range of technologies to help our customers in various phases of software product engineering with agility and scale. An all in-house team and no third party dependencies ensure that the entire product team is in sync to deliver excellence."
          }
        />
      </Grid>
      <Grid container>
        <Grid item xs={12} className={classes.technologiesHeading}>
          <Typography variant="h4">
            Technology stacks we use for product development
          </Typography>
        </Grid>
        <Container>
          <TechnologyTypesSection
            technology={"Front-End Design"}
            technologyImages={FrontEndTechnologies}
          />
          <TechnologyTypesSection
            technology={"DATABASE"}
            technologyImages={Database}
          />
        </Container>
        <Container>
          <Grid container>
            <Grid item className={classes.technologiesContentSection}>
              <Typography variant="h4" gutterBottom>
                Diverse technology stacks to ensure your success
              </Typography>
              <Typography>Here is the bunch of solutions we offer</Typography>
            </Grid>
            <Grid>
              <TechnologyListPagesSection pages={pages} />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export async function getStaticProps() {
  const result = await client.query({
    query: gql`
      query GetPages {
        pages {
          nodes {
            slug
            title
            uri
            content
          }
        }
      }
    `,
  });

  return {
    props: {
      pages: result.data.pages.nodes,
    },
  };
}

export default TechnologiesPage;
