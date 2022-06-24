import Navbar from "../../../components/Navbar";
import {
  Container,
  Grid,
  Card,
  Row,
  Text,
  Input,
  Button,
} from "@nextui-org/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://dummyjson.com/users`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

const Index = ({ data }) => {
  const route = useRouter();
  console.log("======user", data);
  return (
    <>
      <Head>
        <title>staff</title>
      </Head>
      <Navbar />
      <Text h1 css={{ textAlign: "center", mt: 25 }}>
        OUR STAFF
      </Text>

      <Grid.Container gap={2} justify="flex-start" className="staff-page-class">
        {data.users.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            {console.log("=========itemStaff", item)}
            <Card isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={item.image}
                  objectFit="cover"
                  width="100%"
                  height={140}
                  alt={item.firstName}
                  className="staff-page-card-image"
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>
                    {item.firstName} {item.lastName}{" "}
                  </Text>
                  <Button
                    color="error"
                    onClick={() => route.push(`/about/staff/${item?.id}`)}
                    auto
                    ghost
                  >
                    more Details
                  </Button>
                  {/* <Text
                    css={{
                      color: "$accents7",
                      fontWeight: "$semibold",
                      fontSize: "$sm",
                    }}
                  >
                    {item.price}
                  </Text> */}
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};
export default Index;
