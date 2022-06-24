import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="main-container">
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <Image
        src="/map.png"
        alt="Picture of the author"
        width={500}
        height={500}
        className="image-class"
      />
      <Text className="home-header-text" h1 color="yellow" css={{ m: 20 }}>
        WE DESIGN YOUR SPACE
      </Text>
      <Text className="home-header-sub-text" h3 color="yellow" css={{ m: 20 }}>
        o use a simple website template, you have to be precise with your goal,
        content, and what you expect the user to do on your site.
      </Text>
      <div className="home-header-button">
        <Button color="warning" auto ghost>
          SEE OUR PROJECT
        </Button>
      </div>
    </div>
  );
}
