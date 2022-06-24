import { Card, Grid, Text, Button, Row, Link } from "@nextui-org/react";
import Navbar from "../../../../components/Navbar";
import { useRouter } from "next/router";
import Head from "next/head";

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((userData) => ({
    params: {
      slugId: userData.id.toString(),
      staffdetails: userData.id.toString(),
    },
  }));
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
export async function getStaticProps(context) {
  const id = context.params.slugId;
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data }, revalidate: 10 };
}

const SlugId = ({ data }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Navbar />
      <Text h1 css={{ textAlign: "center", mt: 30 }}>
        User Posts
      </Text>
      <Card css={{ mw: "800px", m: "auto", mt: 30 }}>
        <Card.Body>
          <Text h2>
            {data.id}. {data.title}
          </Text>
          <Text h6>{data.body}</Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default SlugId;
