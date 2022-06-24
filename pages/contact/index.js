import Navbar from "../../components/Navbar";
import { Container, Card, Row, Text, Input, Button } from "@nextui-org/react";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Navbar />
      <Container css={{ mw: 1024 }} className="contact-container">
        <Card css={{ $$cardColor: "$colors$primary", mt: 20 }}>
          <Card.Body>
            <Row justify="center" align="center" className="contact-us-page">
              <Text h1 color="white" css={{ m: 0, textAlign: "center" }}>
                CONTACT US
              </Text>
              <Text h4 color="white" css={{ m: 0, textAlign: "center" }}>
                Lorem Ipsum has been the industry&lsquo;s standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </Text>
              <Input underlined labelPlaceholder="Your Name" color="default" />
              <Input underlined labelPlaceholder="Your Mail" color="default" />
              <Input
                underlined
                labelPlaceholder="Your Meassage"
                color="default"
              />
              <Button
                color="primary"
                className="contact-submit-button"
                auto
                ghost
              >
                SUBMIT
              </Button>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
export default Index;
