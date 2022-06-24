import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";

const Index = () => {
  const route = useRouter();
  return (
    <>
      <Navbar />
      <h2 className="about-page"> ABOUT US</h2>
      <hr />
      <div className="about-image">
        <Image
          src="/owners.jpeg"
          alt="Picture of the author"
          width={900}
          height={500}
          className="image-class"
        />
      </div>
      <div>
        <Text h3 size={20} css={{ m: 20, textAlign: "center" }}>
          co-owners and best mates
        </Text>
        <Button
          onClick={() => {
            route.push("/about/staff");
          }}
          color="primary"
          className="contact-submit-button"
          auto
          ghost
        >
          Staff
        </Button>
      </div>
      <div className="about-text">
        <Text h6 size={20} css={{ m: 20 }}>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure. To take a
          trivial example, which of us ever undertakes laborious physical
          exercise, except to obtain some advantage from it? But who has any
          right to find fault with a man who chooses to enjoy a pleasure that
          has no annoying consequences, or one who avoids a pain that produces
          no resultant pleasure? On the other hand, we denounce with righteous
          indignation and dislike men who are so beguiled and demoralized by the
          charms of pleasure of the moment, so blinded by desire.
        </Text>
      </div>
    </>
  );
};
export default Index;
