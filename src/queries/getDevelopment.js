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
          buttons {
            primaryButtonText
            primaryButtonLink {
              ... on Page {
                id
                uri
              }
            }
          }
        }
      }
    }
    developmentSteps {
      nodes {
        developmentStepFileds {
          title
          subtitle
          description
          icon {
            altText
            sourceUrl
          }
          image {
            sourceUrl
          }
        }
      }
    }
  }
`;
