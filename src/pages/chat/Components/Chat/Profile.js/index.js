import {
  Avatar,
  Flex,
  Text,
  WrapItem,
  Skeleton,
  SkeletonCircle,
  Center,
  HStack,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import UseGetUsers from "../../../Hooks/useGetUsers";

function Profile({ title, url, date, channel }) {
  const {
    loading,
    user,
    getMessages,
    getUserSelected,
    getChannelSelected,
    refresh,
    ChannelSelected,
  } = UseGetUsers(title, channel.channelId);
  const get = () => {
    getMessages(channel.channelId);
    getUserSelected(title);
    getChannelSelected(channel.channelId);
  };

  const getMesssg = () => {
    getMessages(ChannelSelected.channelId);
  };

  // get new messages from back
  useEffect(() => {
    if (refresh) getMesssg();
  }, [refresh]);

  return (
    <Center
      mt="2"
      cursor={"pointer"}
      _hover={{
        bg: "#eee",
        color: "teal.500",
      }}
      onClick={get}
    >
      <Flex direction={"row"} justify={"space-between"} py="3" w="100%">
        <HStack direction={"row"} align="center" minW={"55%"} p="0">
          <WrapItem>
            {loading ? (
              <SkeletonCircle size="8" mx={"2"} />
            ) : (
              <Avatar
                cursor="pointer"
                name={user?.firstname}
                src={url}
                size="sm"
                ml={"2"}
                mr={"1"}
              />
            )}
          </WrapItem>
          <>
            {loading ? (
              <>
                <Skeleton m="2" w="100px" height="25px" />
                <Skeleton m="2" w="60px" height="25px" />
              </>
            ) : (
              <HStack w={"100%"}>
                <HStack w={"80%"}>
                  <Text fontSize={"16"} fontWeight="bold">
                    {" "}
                    {user?.firstname}
                  </Text>
                  <Text fontSize={"16"} fontWeight="bold">
                    {" "}
                    {user?.lastname}
                  </Text>
                </HStack>
                {/* <Stack mx="2">
                  {subject ? (
                    <Text fontSize="12px">{subject.slice(0, 11) + "..."}</Text>
                  ) : (
                    <Center w={"43"}>
                      <Text fontSize="10px">no subject</Text>
                    </Center>
                  )}
                </Stack> */}
              </HStack>
            )}
          </>
        </HStack>

        {loading ? (
          <>
            <Skeleton m="2" w="100px" height="25px" />
          </>
        ) : (
          <Stack w="25%">
            <Center>{date}</Center>
          </Stack>
        )}
      </Flex>
    </Center>
  );
}

export default Profile;
