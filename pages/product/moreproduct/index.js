import Navbar from "../../../components/Navbar";
import {
  Container,
  Grid,
  Card,
  Row,
  Text,
  Input,
  Col,
  Button,
} from "@nextui-org/react";
import Head from "next/head";
import { useRouter } from "next/router";

// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://dummyjson.com/products`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

const Index = ({ data }) => {
  const route = useRouter();
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <Navbar />
      <div className="more-product-classname">
        {data.products?.map((data) => {
          return (
            <Grid.Container key={data.id} gap={2} justify="center">
              <Grid xs={12} sm={4}>
                <Card css={{ w: "100%", h: "400px" }}>
                  <Card.Header
                    css={{ position: "absolute", zIndex: 1, top: 5 }}
                  >
                    <Col>
                      <Text
                        size={12}
                        weight="bold"
                        transform="uppercase"
                        color="#ffffffAA"
                      >
                        New
                      </Text>
                      <Text h3 color="blue">
                        {data.title}
                      </Text>
                    </Col>
                  </Card.Header>
                  <Card.Body css={{ p: 0 }}>
                    <Card.Image
                      src={data.thumbnail}
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      alt="Card example background"
                    />
                  </Card.Body>
                  <Card.Footer
                    isBlurred
                    css={{
                      position: "absolute",
                      bgBlur: "#ffffff66",
                      borderTop:
                        "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                      bottom: 0,
                      zIndex: 1,
                    }}
                  >
                    <Row>
                      <Col>
                        <Text color="#000" size={12}>
                          Available soon.
                        </Text>
                        <Text color="#000" size={12}>
                          Get notified.
                        </Text>
                      </Col>
                      <Col>
                        <Row justify="flex-end">
                          <Button flat auto rounded color="secondary">
                            <Text
                              css={{ color: "inherit" }}
                              size={12}
                              weight="bold"
                              transform="uppercase"
                            >
                              Notify Me
                            </Text>
                          </Button>
                          <Button
                            css={{ ml: 10 }}
                            flat
                            auto
                            rounded
                            color="primary"
                            onClick={() =>
                              route.push(`/product/moreproduct/${data.id}`)
                            }
                          >
                            <Text
                              css={{ color: "inherit" }}
                              size={12}
                              weight="bold"
                              transform="uppercase"
                            >
                              More Details
                            </Text>
                          </Button>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
            </Grid.Container>
          );
        })}{" "}
      </div>
    </>
  );
};
export default Index;
