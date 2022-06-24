import { Card, Grid, Text, Button, Row, Link } from "@nextui-org/react";
import Navbar from "../../../components/Navbar";
import { useRouter } from "next/router";

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://dummyjson.com/users");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.users.map((userData) => ({
    params: { staffdetails: userData.id.toString() },
  }));
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
export async function getStaticProps(context) {
  const id = context.params.staffdetails;
  // Fetch data from external API
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data }, revalidate: 10 };
}

const StaffDetails = ({ data }) => {
  const route = useRouter();
  return (
    <>
      <Navbar />
      <div className="back-button">
        <Button
          size="sm"
          css={{ ml: 250 }}
          onClick={() => route.push(`/about/staff`)}
        >
          back
        </Button>
      </div>
      <div className="myblog_data">
        <Grid.Container gap={2} justify="flex-start">
          <Grid xs={6} sm={3} className="item-details">
            <Card isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={data?.image}
                  objectFit="cover"
                  width="100%"
                  height={500}
                  alt={data?.username}
                  className="item-details-image"
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>
                    {data?.firstName} {data?.lastName}
                  </Text>
                  <Text
                    css={{
                      color: "$accents7",
                      fontWeight: "$semibold",
                      fontSize: "$sm",
                    }}
                  >
                    {`Department: ${data?.company?.department}`}
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>
        <div className="product-details">
          <Text h3 color="black" css={{ m: 20 }}>
            Name: {data?.firstName} {data?.lastName}
          </Text>
          <Text h3 color="black" css={{ m: 20 }}>
            age: {data?.age}
          </Text>
          <Text h3 color="black" css={{ m: 20 }}>
            Company: {data?.company?.title}
          </Text>
          <Text h3 color="black" css={{ m: 20 }}>
            Department: {data?.company?.department}
          </Text>
          <Text h3 color="black" css={{ m: 20 }}>
            Gender: {data?.gender}
          </Text>
          <Text h3 color="black" css={{ m: 20 }}>
            Phone: {data?.phone}
          </Text>
          <Button
            color="gradient"
            size="sm"
            onClick={() => route.push(`/about/staff/${data?.id}/${data?.id}`)}
          >
            Post{" "}
          </Button>
        </div>
      </div>
    </>
  );
};
export default StaffDetails;
