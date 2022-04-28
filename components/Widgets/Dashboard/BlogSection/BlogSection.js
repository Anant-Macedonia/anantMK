import { Grid, Typography } from "@mui/material";
import CustomCard from "../../../UI/Card/Card";
import classes from "./blogSection.module.css";

const BlogSection = ({ posts }) => {
  return (
    <Grid container key={"key"}>
      <Grid item xs={12} className={classes.blogSectionHeader}>
        <Typography variant="h2">Featured Blogs</Typography>
      </Grid>

      {posts.map((post) => {
        return (
          <Grid
            key={post.slug}
            item
            xs={4}
            className={classes.blogCardContainer}>
            <CustomCard
              key={post.slug}
              title={post.title}
              link={`/blog/${post.slug}`}
              image={post.featuredImage.node.sourceUrl}
              content={post.content}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BlogSection;
