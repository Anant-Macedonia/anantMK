import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import CustomCard from "../../../UI/Card/Card";
import classes from "./blogSection.module.css";

const BlogSection = ({ posts }) => {
  return (
    <Grid container>
      <Grid item xs={12} className={classes.blogSectionHeader}>
        <Typography variant="h2">Featured Blogs</Typography>
      </Grid>

      {posts.map((post) => {
        return (
          <Grid item xs={4}>
            {/* <CustomCard
              title={post.title}
              link={`/category/blog/${post.slug}`}
              image={post.featuredImage.node.link}
              content={post.content}
            /> */}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BlogSection;
