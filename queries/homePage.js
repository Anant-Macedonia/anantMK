import { gql } from "@apollo/client";

export const HOME_PAGE = gql`
  query GetHomeAndPosts {
    pageBy(id: "cG9zdDoy") {
      acfHomePageFields {
        cassandraLinkDescription
        cassandraLinkTitle
        clientSectionTitle
        contactDescription
        contactTitle
        enterpriseSectionTitle
        heroDescription
        heroTitle
        cassandraLinkImage {
          sourceUrl
        }
        contactImage {
          sourceUrl
        }
        image {
          sourceUrl
        }
      }
    }
    posts(first: 3) {
      nodes {
        title
        content
        date
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
    homecards {
      nodes {
        acfHomeCardFields {
          buttonLink {
            title
            url
            target
          }
          title
          description
        }
      }
    }
    clients {
      nodes {
        clientFields {
          clientLogo {
            sourceUrl
          }
        }
      }
    }
    testimonialCards {
      nodes {
        acfTestimonialCardFields {
          clientJobPosition
          clientName
          testamonialText
          clientImage {
            sourceUrl
          }
        }
      }
    }
    enterpriseCards {
      nodes {
        enterpriseCardFields {
          enterpriseTitle
          enterpriseDescription
          enterpriseImage {
            sourceUrl
          }
        }
      }
    }
    testimonialCards {
      nodes {
        acfTestimonialCardFields {
          clientName
          clientJobPosition
          testamonialText
          clientImage {
            sourceUrl
          }
        }
      }
    }
  }
`;
