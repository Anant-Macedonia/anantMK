import { gql } from "@apollo/client";

export const GET_PROJECTS_DATA = gql`
  query ProjectsQuery {
    projects {
      nodes {
        projectFields {
          projectTitle
          projectDescription
          projectLink
          projectImage {
            sourceUrl
          }
        }
      }
    }
  }
`;
