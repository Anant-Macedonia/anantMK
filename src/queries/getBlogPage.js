import { gql } from "@apollo/client";

export const GET_BLOG_PAGE_DATA = gql`
  query GetBlogPage {
    pageBy(id: "cG9zdDoxODMzMTE=") {
      blogPageFields {
        heroTitle
        heroSubtitle
        heroDescription
        heroImage {
          altText
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
