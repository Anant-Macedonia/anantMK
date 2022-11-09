import { gql } from "@apollo/client";

export const GET_APPROACH_SECTION_DATA = gql`
  query ApproachSectionQuery {
    approachSections {
      nodes {
        approachFields {
          title
          description
          button {
            buttonLink {
              ... on Page {
                uri
              }
            }
          }
        }
      }
    }
  }
`;
