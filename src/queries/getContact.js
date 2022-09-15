import { gql } from "@apollo/client";

export const GET_CONTACT_DATA = gql`
  query GetContact {
    pageBy(id: "cG9zdDoy") {
      acfHomePageFields {
        contactTitle
        contactDescription
        contactImage {
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
`;
