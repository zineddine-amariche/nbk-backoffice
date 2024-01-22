import React from "react";
import { ListItem, UnorderedList, Text } from "@chakra-ui/react";

export default function ErrorHandler({ res }) {
  if (typeof res?.data?.StatusDescription === "string") {
    return <Text>{res?.data?.StatusDescription}</Text>;
  } else if (res?.data?.StatusDescription?.errors) {
    return (
      <UnorderedList>
        {res.data.StatusDescription.errors.map((err, i) => (
          <ListItem key={i}>{err?.message}</ListItem>
        ))}
      </UnorderedList>
    );
  } else if (res?.data?.StatusDescription?.password) {
    return (
      <UnorderedList>
        {res.data.StatusDescription.password.map((err, i) => (
          <ListItem key={i}>{err}</ListItem>
        ))}
      </UnorderedList>
    );
  } else {
    return <Text>quelque chose s'est mal passé</Text>;
  }
}
