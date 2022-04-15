import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import { Container } from "@mui/material";
import CardsSection from "../components/Widgets/Dashboard/CardsSection/CardsSection";
import CustomCarousel from "../components/Carousel/Carousel";
import PortfolioSection from "../components/Widgets/Dashboard/PortfolioSection/PortfolioSection";
import WhyUs from "../components/Widgets/Dashboard/WhyUsSection/WhyUs";
import BlogSection from "../components/Widgets/Dashboard/BlogSection/BlogSection";

export default function Home({ posts, title }) {
  return (
    <>
      <CustomCarousel />
      <Container>
        <CardsSection />
        <PortfolioSection />
        <WhyUs />
        <BlogSection posts={posts} title={title} />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const result = await client.query({
    query: gql`
      query GetHomeAndPosts {
        pageBy(uri: "/") {
          title
        }

        posts(first: 3) {
          nodes {
            title
            content
            date
            slug
            featuredImage {
              node {
                link
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
      title: result.data.pageBy.title,
    },
  };
}
