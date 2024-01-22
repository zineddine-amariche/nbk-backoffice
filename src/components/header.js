import React, { useState } from "react";
import { Flex, Heading, Button, Text, Stack } from "@chakra-ui/react";
import { BiShow } from "react-icons/bi";
import { AiFillFileAdd } from "react-icons/ai";
import Filter from "./filter";
import { ExportCSV } from "components/Export";

export default function Header({
  title,
  FilterForm,
  edit,
  Actions,
  isHeader,
  users,
  fileName,
}) {
  const [showfilter, setShowfilter] = useState(false);
  const handleShowfilter = () => {
    setShowfilter(!showfilter);
  };
  return (
    <>
      <Flex
        mb="4"
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
        p="4"
        pt="16"
        bg="#2DDCB1"
        color="white"
      >
        <Heading>{title}</Heading>
        {!edit && (
          <Stack spacing={2} justify="flex-start">
            <ExportCSV csvData={users} fileName={fileName} />
          </Stack>
        )}
      </Flex>
      {showfilter && <Filter FilterForm={FilterForm}></Filter>}
    </>
  );
}
