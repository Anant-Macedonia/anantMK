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
