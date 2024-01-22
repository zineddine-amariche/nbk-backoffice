import React from "react";
import {
  Select,
  FormControl,
  FormLabel,
  Button,
  Box,
  Input,
  Flex,
} from "@chakra-ui/react";
import useFilter from "../hooks/useFilter";

export default function Filter() {
  const { register, handleSubmit, isSubmitting, onSubmit } = useFilter();

  const queries = [
    "userId",
    "userTypeId",
    "userTag",
    "specifiedUSPerson",
    "controllingPersonType",
    "employeeType",
    "email",
    "name",
    "legalName",
    "parentUserId",
  ];
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction={{ base: "column", md: "row" }} flexWrap="wrap">
        {queries.map((query, i) => (
          <FormControl
            m={{ base: "none", md: "4" }}
            my={{ base: "2" }}
            flex={{ base: "none", md: "1 0 21%" }}
            key={i}
          >
            <FormLabel>{query}</FormLabel>
            <Input
              placeholder={query}
              variant="filled"
              {...register(query)}
            ></Input>
          </FormControl>
        ))}
        {/* </Flex>
      <Flex direction={{ base: "column", md: "row" }} flexWrap="wrap"> */}
        <FormControl
          m={{ base: "none", md: "4" }}
          my={{ base: "4" }}
          flex={{ base: "none", md: "1 0 21%" }}
        >
          <FormLabel>userStatus</FormLabel>
          <Select variant="filled" {...register("userStatus")}>
            <option value={""}>none</option>
            <option value="validated">validé</option>
            <option value="pending">en attendant</option>
            <option value="canceled">annulé</option>
          </Select>
        </FormControl>

        <FormControl
          m={{ base: "none", md: "4" }}
          my={{ base: "4" }}
          flex={{ base: "none", md: "1 0 21%" }}
        >
          <FormLabel>sortBy</FormLabel>
          <Select variant="filled" {...register("sortBy")}>
            <option value={""}>none</option>
            <option value={"createdDateFrom"}>createdDateFrom</option>
            <option value={"userId"}>userId</option>
            <option value={"userTypeId"}>walletTypeId</option>
            <option value={"updatedDateTo"}>updatedDateTo</option>
            <option value={"updatedDateFrom"}>updatedDateFrom</option>
          </Select>
        </FormControl>
        <FormControl
          m={{ base: "none", md: "4" }}
          my={{ base: "4" }}
          flex={{ base: "none", md: "1 0 21%" }}
        >
          <FormLabel>sortOrder</FormLabel>
          <Select variant="filled" {...register("sortOrder")}>
            <option value={""}>none</option>
            <option value={"DESC"}>DESC</option>
            <option value={"ASC"}>ASC</option>
          </Select>
        </FormControl>
      </Flex>

      <Box
        my="4"
        mx={{ base: "none", md: "4" }}
        display="flex"
        justifyContent="flex-end"
      >
        <Button
          _hover={{ bg: "gray.900" }}
          _focus={{ bg: "gray.900" }}
          bg="black"
          color="white"
          isLoading={isSubmitting}
          isDisabled={isSubmitting}
          type="submit"
        >
          apply
        </Button>
      </Box>
    </form>
  );
}
