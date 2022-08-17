import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import { Container, Divider } from "@mui/material";
import Head from "next/head";
import CardsSection from "../components/Widgets/Dashboard/CardsSection/CardsSection";
import PortfolioSection from "../components/Widgets/Dashboard/PortfolioSection/PortfolioSection";
import WhyUs from "../components/Widgets/Dashboard/WhyUsSection/WhyUs";
import BlogSection from "../components/Widgets/Dashboard/BlogSection/BlogSection";
import Hero from "../components/Hero/Hero";
import CassandraSection from "../components/Widgets/Dashboard/CassandraSection";
import EnterpriseSection from "../components/Widgets/Dashboard/EnterpriseSection";
import TestimonialSection from "../components/Widgets/Dashboard/TestimonialSection";
import ClientsSection from "../components/Widgets/Dashboard/ClientsSection";
import ContactSection from "../components/Widgets/Dashboard/ContactSection";

export default function Home({
  homepage,
  posts,
  homecards,
  clients,
  enterpriseCards,
  testimonialCards,
}) {
  return (
    <>
      <Head>
        {/* <title>{seo.title}</title>
        <meta name="description" content={seo.description} /> */}
      </Head>
      <Hero heroData={homepage} />
      <CardsSection cardsData={homecards} />
      <CassandraSection cassandraData={homepage} />
      <EnterpriseSection
        enterpriseData={homepage}
        enterpriseCardData={enterpriseCards}
      />
      <TestimonialSection testimonialData={testimonialCards} />
      <ClientsSection clientsData={clients} clientsTitle={homepage} />
      <Divider
        sx={{
          borderBottomWidth: 3,
          marginTop: "100px",
          marginBottom: "100px",
          opacity: "1",
        }}
      />
      <ContactSection contactData={homepage} />
    </>
  );
}

export async function getStaticProps() {
  const result = await client.query({
    query: gql`
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
    `,
  });

  return {
    props: {
      posts: result.data.posts.nodes,
      homecards: result.data.homecards.nodes,
      clients: result.data.clients?.nodes,
      homepage: result.data.pageBy.acfHomePageFields,
      enterpriseCards: result.data.enterpriseCards.nodes,
      testimonialCards: result.data.testimonialCards.nodes,
    },
  };
}
