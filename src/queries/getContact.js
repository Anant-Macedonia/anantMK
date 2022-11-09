import { gql } from "@apollo/client";

export const GET_CONTACT_DATA = gql`
  query ContactQuery {
    nodeByUri(uri: "/contact") {
      ... on Page {
        contactFields {
          heroTitle
          heroDescription
          contactEmail
          contactMobile
          contactPhone
          heroImage {
            sourceUrl
          }
        }
      }
    }
  }
`;
