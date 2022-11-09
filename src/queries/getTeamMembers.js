import { gql } from "@apollo/client";

export const GET_TEAM_MEMBERS_DATA = gql`
  query TeamMembersQuery {
    teamMembers {
      nodes {
        teamMemberFields {
          fullName
          image {
            sourceUrl
          }
        }
      }
    }
  }
`;
