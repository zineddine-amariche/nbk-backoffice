import { Box, Stack } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import HeadChat from "./headChat/index.js";
import UseGetUsers from "pages/chat/Hooks/useGetUsers.js";
import { ItemsRender } from "./ItemsRender/index.js";
import Chatcontainer from "pages/chat/Hooks/ChatContainer.js";
import ChannelsProfiles from "../ChannelsChat/index.js";
import ContainerSendMessage from "../SendMessage/index.js";
function BackGroundMessage() {
  const {
    nombre,
    Messages,
    userSelected,
    LoadingUserSelected,
    ChannelSelected,
    LoadingChannelSelected,
    userIDStore
  } = UseGetUsers();
  // console.log("Messages----", Messages);
  const BackGround = [
    "linear(to-tr, gray.100, gray.400)",
    "linear(to-t, blue.200, teal.500)",
    "linear(to-b, gray.100, gray.100)",
  ];

  const messageEndRef = useRef(null);

  useEffect(() => {
    if (Messages) {
      messageEndRef?.current?.scrollIntoView();
    }
  }, [Messages]);
console.log('MessagesMessagesMessagesMessages', Messages)
  return (
    <Chatcontainer>
      {/* Left side Chat */}
      <ChannelsProfiles />

      {/* Right side Chat */}
      <Box w="100%" position={"relative"}>
        <HeadChat
          userSelected={userSelected}
          LoadingUserSelected={LoadingUserSelected}
          ChannelSelected={ChannelSelected}
          LoadingChannelSelected={LoadingChannelSelected}
        />

        <Box
          w="100%"
          overflowY="auto"
          // h="full"
          bgGradient={BackGround}
          pos={"relative"}
          px="5"
          bg="#F44"
          h="68vh"
        >
          {Messages?.map((i, index) => {
            return (
              <Stack key={index}>
                <ItemsRender
                  item={i}
                  nombre={nombre}
                  // first={Messages[0]?.author}
                  first={userIDStore?.userId}
                  userSelected={userSelected}
                  // userIDStore={userIDStore?.userId}
                />
                <Box ref={messageEndRef} />
              </Stack>
            );
          })}
        </Box>
        {/* Send messgae */}
        <ContainerSendMessage
          userSelected={userSelected}
          ChannelSelected={ChannelSelected}
          userIDStore={userIDStore?.userId}

        />
      </Box>
    </Chatcontainer>
  );
}

export default BackGroundMessage;
