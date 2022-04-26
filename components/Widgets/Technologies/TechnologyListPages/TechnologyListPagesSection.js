import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import BlogSection from "../../Dashboard/BlogSection/BlogSection";
import classes from "./technologyListPagesSection.module.css";

const TechnologyListPagesSection = ({ pages }) => {
  return (
    <Grid container className={classes.technologyListContainer}>
      {pages.map((page) => {
        return (
          page.slug !== "sample-page" && (
            <Grid
              item
              key={page.slug}
              xs={6}
              className={classes.technologyListItem}>
              <Typography variant="h4">
                <Link href="/" passHref>
                  <a>{page.title}</a>
                </Link>
              </Typography>
              <Grid dangerouslySetInnerHTML={{ __html: page.content }} />
            </Grid>
          )
        );
      })}
    </Grid>
  );
};

export default TechnologyListPagesSection;
