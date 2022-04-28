import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";
import Head from "next/head";
import { Grid, Typography } from "@mui/material";

const BlogPage = ({ post }) => {
  const { seo } = post;
  return (
    <Grid>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Head>
      <Grid>
        <Typography>{post.title}</Typography>
        <Grid dangerouslySetInnerHTML={{ __html: post.content }} />
      </Grid>
    </Grid>
  );
};

export async function getStaticPaths() {
  const result = await client.query({
    query: gql`
      query GetPosts {
        posts {
          nodes {
            slug
          }
        }
      }
    `,
  });

  return {
    paths: result.data.posts.nodes.map(({ slug }) => {
      return {
        params: { slug },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const result = await client.query({
    query: gql`
      query GetPostBySlug($slug: String!) {
        postBy(slug: $slug) {
          title
          content
          seo {
            metaDesc
            title
            fullHead
          }
        }
      }
    `,
    variables: { slug },
  });

  return {
    props: {
      post: result.data.postBy,
    },
  };
}

export default BlogPage;
