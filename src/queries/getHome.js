import { gql } from "@apollo/client";

export const GET_HOME_DATA = gql`
  query HomePageQuery {
    nodeByUri(uri: "/") {
      ... on Page {
        id
        homePageFields {
          heroTitle
          heroSubtitle
          heroDescription
          buttons {
            primaryButtonText
            primaryButtonLink {
              ... on Page {
                uri
              }
            }
            secondaryButtonText
            secondaryButtonLink {
              ... on Page {
                uri
              }
            }
          }
        }
      }
    }
    serviceCards {
      nodes {
        serviceFileds {
          serviceTitle
          serviceDescription
          serviceImage {
            sourceUrl
          }
        }
      }
    }
  }
`;
