import { client } from "../../lib/apollo";
import { gql } from "@apollo/client";
import { Container, Grid, Typography } from "@mui/material";
import PagesHeader from "../../components/Widgets/PagesHeader/PagesHeader";
import classes from "./software-product.module.css";
import AodIcon from "@mui/icons-material/Aod";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import WhyUs from "../../components/Widgets/Dashboard/WhyUsSection/WhyUs";
import BlogSection from "../../components/Widgets/Dashboard/BlogSection/BlogSection";

const SoftwareProduct = ({ posts }) => {
  // links = [
  //   {
  //     name: "hello",
  //     url: "/",
  //   },
  // ];
  return (
    <>
      <PagesHeader
        title={"Engineering Awesome Products And Customer Success"}
        description={
          "Your technology partner in building flawless web apps and products at an affordable cost that make you more efficient, successful and profitable."
        }
        buttonText={"Submit"}
        // link={links}
        link={"true"}
      />
      <Container>
        <Grid className={classes.softwareServices}>
          <Grid>
            <Typography variant="h3">Services</Typography>
            <Typography>
              Finoit is a product engineering company providing custom software
              development, IoT development and mobile app development services.
            </Typography>
          </Grid>
          <Grid container className={classes.softwareItems}>
            <Grid item xs={4} className={classes.softwareItem}>
              <AodIcon fontSize="large" />
              <Typography variant="h6">Mobile Applications</Typography>
              <Typography>
                UX driven, well programmed app development services to deliver
                flawless apps that users love
              </Typography>
            </Grid>
            <Grid item xs={4} className={classes.softwareItem}>
              <DesktopWindowsIcon fontSize="large" />
              <Typography variant="h6">Web Applications</Typography>
              <Typography>
                UX driven, well programmed app development services to deliver
                flawless apps that users love
              </Typography>
            </Grid>
            <Grid item xs={4} className={classes.softwareItem}>
              <CloudDownloadIcon fontSize="large" />
              <Typography variant="h6">Web Applications</Typography>
              <Typography>
                UX driven, well programmed app development services to deliver
                flawless apps that users love
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <WhyUs />
        <BlogSection posts={posts} />
      </Container>
    </>
  );
};

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

export default SoftwareProduct;
