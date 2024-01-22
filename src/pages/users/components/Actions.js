import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Actions() {
  return (
    <>
      <Link to="/users/add">
        <Button
          _hover={{ bg: "gray.900" }}
          _focus={{ bg: "gray.900" }}
          bg="black"
          color="white"
        >
          Créer un utilisateur
        </Button>
      </Link>
    </>
  );
}
