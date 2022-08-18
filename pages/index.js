import { client } from "../lib/apollo";
import { Divider } from "@mui/material";
import Head from "next/head";
import CardsSection from "../components/Widgets/Dashboard/CardsSection/CardsSection";
import Hero from "../components/Hero/Hero";
import CassandraSection from "../components/Widgets/Dashboard/CassandraSection";
import EnterpriseSection from "../components/Widgets/Dashboard/EnterpriseSection";
import TestimonialSection from "../components/Widgets/Dashboard/TestimonialSection";
import ClientsSection from "../components/Widgets/Dashboard/ClientsSection";
import ContactSection from "../components/Widgets/Dashboard/ContactSection";
import { HOME_PAGE } from "../queries/homePage";

export default function Home({
  homepage,
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

export async function getStaticProps(context) {
  const { data, loading, networkStatus } = await client.query({
    query: HOME_PAGE,
  });

  return {
    props: {
      homecards: data?.homecards?.nodes,
      clients: data?.clients?.nodes,
      homepage: data?.pageBy?.acfHomePageFields,
      enterpriseCards: data?.enterpriseCards?.nodes,
      testimonialCards: data?.testimonialCards?.nodes,
    },
  };
}
