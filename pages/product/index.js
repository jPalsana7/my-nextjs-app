import Navbar from "../../components/Navbar";
import Head from "next/head";
import { Card, Grid, Text, Button, Row, Link } from "@nextui-org/react";
import { useRouter } from "next/router";

// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

const Index = ({ data }) => {
  const route = useRouter();
  return (
    <>
      <Navbar />
      <Text h1 css={{ m: 20, textAlign: "center" }}>
        Product Details
      </Text>
      <div className="product-main-container">
        <Grid.Container gap={2} className="product-button-group">
          <Grid>
            <Button
              color="secondary"
              auto
              ghost
              onClick={() => route.push(`/`)}
            >
              Back
            </Button>
          </Grid>
          <Grid>
            <Button
              color="primary"
              auto
              ghost
              onClick={() => route.push(`/product/moreproduct`)}
            >
              More Products
            </Button>
          </Grid>
        </Grid.Container>
      </div>

      <div className="blog_card_class">
        {data?.map((productDetail) => (
          <Grid xs={6} sm={3} key={productDetail.id}>
            <Card isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={productDetail?.image}
                  objectFit="cover"
                  width="100%"
                  height={500}
                  alt={productDetail?.title}
                  className="product-image-class"
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>{productDetail?.title}</Text>
                </Row>
                {/* <Link href={`/product/${productDetail.id}`}> */}
                <Button
                  size="sm"
                  onClick={() => route.push(`/product/${productDetail?.id}`)}
                >
                  checkout
                </Button>
                {/* </Link> */}
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </div>
    </>
  );
};
export default Index;
