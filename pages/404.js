import { Card, Grid, Text, Button, Row, Link } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function Custom404() {
  const route = useRouter();
  return (
    <div className="error-page">
      <Text h1 size={100}>
        404
      </Text>
      <Text h2>This is not the Page You're Looking For. </Text>
      <Button
        shadow
        bordered
        color="gradient"
        size="sm"
        onClick={() => {
          route.push("/");
        }}
        css={{ height: "unset" }}
      >
        Go to homepage{" "}
      </Button>
    </div>
  );
}
