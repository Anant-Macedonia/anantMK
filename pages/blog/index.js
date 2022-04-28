import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";
import { Container, Grid } from "@mui/material";
import BlogSection from "../../components/Widgets/Dashboard/BlogSection/BlogSection";

const Blog = ({ posts }) => {
  return (
    <Grid>
      <Container>
        <BlogSection posts={posts} />
      </Container>
    </Grid>
  );
};

export async function getStaticProps() {
  const result = await client.query({
    query: gql`
      query GetPosts {
        posts {
          nodes {
            title
            content
            date
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      posts: result.data.posts.nodes,
    },
  };
}

export default Blog;
