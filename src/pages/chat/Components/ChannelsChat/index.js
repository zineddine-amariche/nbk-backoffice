import { Avatar, Box, Center, Flex, Heading, HStack, Spinner, VStack, WrapItem } from '@chakra-ui/react';
import React from 'react';
import { Icon } from "@chakra-ui/react";
import useGetChannels from 'pages/chat/Hooks/useGetChannels';
import Profile from '../Chat/Profile.js';
import { BiDotsVerticalRounded } from "react-icons/bi";

const ChannelsProfiles = () => {
  const { loading, channels } = useGetChannels();

    return (
        <VStack h="83vh" bg="#fff" w={"25vw"}>
        <Box bg="#f5f5f5" h="10%" pt="25" w={"100%"}>
          <Flex direction="row" align={"center"} justify="space-between" px="2">
            <WrapItem>
              <Avatar
                cursor="pointer"
                name="Oan Abrahmov"
                src="https://bit.ly/tioluwani-kolawole"
                size="sm"
              />
            </WrapItem>
            <Icon as={BiDotsVerticalRounded} boxSize="25px" cursor="pointer" />
          </Flex>
        </Box>
        {/* channels */}
        <Box overflowY="auto" h="full" pb="8"  bg="#fff">
          <Heading as="h2" px={"2"} size="md" py="2" color="#2DDCB1">
            Chats
          </Heading>
          {loading ? (
            <Center p="8">
              <Spinner color="#2DDCB1" />
            </Center>
          ) : (
            <>
              {channels &&
                channels.length > 0 &&
                channels.map((channel) => (
                  <Profile
                    date={channel.createdAt}
                    key={channel.channelId}
                    title={channel.userId}
                    
                    url="https://bit.ly/tioluwani-kolawole"
                    channel={channel}
                  />
                ))}
            </>
          )}
        </Box>
      </VStack>
    );
}

export default ChannelsProfiles;
