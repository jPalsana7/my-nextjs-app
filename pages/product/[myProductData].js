import { Card, Grid, Text, Button, Row, Link } from "@nextui-org/react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${context.params.myProductData}`
  );
  const data = await res.json();
  return { props: { data } };
}

// export async function getStaticPaths() {
//   const res = await fetch("https://fakestoreapi.com/products");
//   const posts = await res.json();
//   console.log("====res", res);
//   const paths = posts.map((post) => ({
//     params: { myProductData: post.id.toString() },
//   }));
//   return { paths, fallback: true };
// }
// export async function getStaticProps(context) {
//   const id = context.params.myProductData;
//   const res = await fetch(`https://fakestoreapi.com/products/${id}`);
//   const data = await res.json();
//   return { props: { data }, revalidate: 10 };
// }

const MyBlogData = ({ data }) => {
  const route = useRouter();
  return (
    <>
      <Head>
        <title>Product Details</title>
      </Head>
      <Navbar />
      <div className="back-button">
        <Button
          size="sm"
          css={{ ml: 250 }}
          onClick={() => route.push(`/product`)}
        >
          back
        </Button>
      </div>
      <div className="myblog_data">
        <Grid.Container gap={2} justify="flex-start">
          <Grid xs={6} sm={3}>
            <Card isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={data?.image}
                  objectFit="cover"
                  width="100%"
                  height={500}
                  alt={data?.title}
                  className="myproduct-data-class"
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>{data?.title}</Text>
                  <Text
                    css={{
                      color: "$accents7",
                      fontWeight: "$semibold",
                      fontSize: "$sm",
                    }}
                  >
                    {`Rating: ${data?.rating.rate} (${data?.rating.count})`}
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>
        <div className="product-details">
          <Text h3 color="black" css={{ m: 20 }}>
            {data?.title}
          </Text>
          <Text h6 size={15} color="black" className="rating-text">
            <Text span size={15} color="black">
              {" "}
              {data?.rating.rate} &#9734;{" "}
            </Text>
            <Text span size={15} color="#878787" css={{ m: 20 }}>
              {data?.rating.count} Ratings
            </Text>
          </Text>
          <Text h3 color="black" css={{ m: 20 }}>
            $ {data?.price}
          </Text>
          <Text h4 color="black" css={{ m: 20 }}>
            {data?.category}
          </Text>
          <Text h5 color="black" css={{ m: 20 }}>
            {data?.description}
          </Text>
          <div className="card-button">
            <Button className="addtocard-class" color="warning" size="sm">
              ADD TO CART{" "}
            </Button>
            <Button color="gradient" size="sm">
              BUY NOW{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyBlogData;
