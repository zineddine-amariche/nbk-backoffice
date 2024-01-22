import { Avatar, Flex, Heading, Skeleton, SkeletonCircle, WrapItem } from "@chakra-ui/react";
import React from "react";

function HeadChat({ userSelected, LoadingUserSelected,ChannelSelected,LoadingChannelSelected  }) {
  let bgc = LoadingUserSelected ? "#fff" : "#2DDCB1";
  return (
    <Flex align={"center"} bg={bgc} h="5rem" px={5}>
      <WrapItem>
        {LoadingUserSelected ? (
          <SkeletonCircle size="8" />
        ) : (
          <Avatar
            cursor="pointer"
            name={userSelected?.firstname}
            src="https://bit.ly/tioluwani-kolawole"
            size="md"
          />
        )}
      </WrapItem>

      {LoadingUserSelected && LoadingChannelSelected  ? (
        <>
          <Skeleton m="2" w="100px" height="15px" />
          <Skeleton m="2" w="100px" height="15px" />
          <Skeleton m="2" w="60px" height="15px" />
        </>
      ) : (
        <>
          <Heading as="h2" px={"5"} size="md" color="#fff">
            {userSelected?.firstname} {userSelected?.lastname}
          </Heading>
          <Heading as="h3" px={"2"} size="xs" color="#fff">
            {ChannelSelected?.subject ? "("+ChannelSelected?.subject+")" : "(no subject)" }
          </Heading>
        </>
      )}
    </Flex>
  );
}

export default HeadChat;
