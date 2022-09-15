import { gql } from "@apollo/client";

export const GET_SINGLE_POST_DATA = gql`
  query GetSinglePost {
    postBy(
      slug: "cassandra-lunch-103-architecture-of-cassandra-data-processing"
    ) {
      date
      author {
        node {
          firstName
          lastName
          width
          height
        }
      }
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      content
    }
  }
`;
