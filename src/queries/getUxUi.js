import { gql } from "@apollo/client";

export const GET_UX_UI_DATA = gql`
  query UxUiQuery {
    nodeByUri(uri: "services/ux-ui-design") {
      ... on Page {
        id
        uiUxFileds {
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
    uxSteps {
      nodes {
        uxStepFields {
          title
          description
        }
      }
    }
  }
`;
