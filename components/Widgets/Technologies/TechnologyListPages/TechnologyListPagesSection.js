import { Grid, Typography } from "@mui/material";

const TechnologyListPagesSection = ({ pages }) => {
  return (
    <Grid>
      {pages.map((page) => {
        return (
          page.slug !== "sample-page" && (
            <>
              <Typography>{page.title}</Typography>
              <Typography>{page.content}</Typography>
            </>
          )
        );
      })}
    </Grid>
  );
};

export default TechnologyListPagesSection;
