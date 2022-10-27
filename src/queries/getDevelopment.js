import { gql } from "@apollo/client";

export const GET_DEVELOPMENT_DATA = gql`
  query DevelopmentQuery {
    nodeByUri(uri: "/services/development") {
      ... on Page {
        id
        developmentFields {
          heroTitle
          heroDescription
          heroImage {
            sourceUrl
          }
        }
      }
    }
    developmentSteps {
      nodes {
        developmentStepFileds {
          title
          description
        }
      }
    }
  }
`;
