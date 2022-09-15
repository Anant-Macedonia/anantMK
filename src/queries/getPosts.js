import { gql } from "@apollo/client";

export const GET_POSTS_DATA = gql`
  query GetAllPosts {
    posts(first: 1000) {
      nodes {
        id
        title
        content
        excerpt
        date
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            category: name
          }
        }
        tags {
          nodes {
            name
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  }
`;
