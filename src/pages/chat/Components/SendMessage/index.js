import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Icon } from "@chakra-ui/react";
import { BiSend } from "react-icons/bi";
import useSendMessages from "pages/chat/Hooks/useSendMessage";
import { useForm } from "react-hook-form";

const ContainerSendMessage = ({ ChannelSelected,userIDStore }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const [body, setbody] = useState("");
  const { onSubmit } = useSendMessages();
  const submit = () => {
    onSubmit(ChannelSelected.channelId, userIDStore, body);
    setTimeout(() => {
      setbody("");
    }, 2000);
  };
  const handleChange = (event) => setbody(event.target.value);
  return (
    <Box w="95%" bottom={"3"} left="30px" pos={"absolute"}>
      <form onSubmit={handleSubmit(submit)}>
        <Flex bg={"#fff"} borderRadius={25}>
          <InputGroup>
            <Input
              placeholder="send a message"
              borderRadius={25}
              value={body}
              onChange={handleChange}
            />
            <Button
              style={{
                backgroundColor: "transparent",
                outline: 0,
                borderWidth: 0,
                borderColor:"#fff"
              }}
              type="submit"
            >
              <InputRightElement
                pointerEvents="stroke"
                children={
                  <Icon
                    color="gray.300"
                    as={BiSend}
                    cursor="pointer"
                    boxSize="30px"
                    _hover={{
                      color: "#2DDCB1",
                      outline: 0,
                      borderWidth: 0,
                    }}
                  />
                }
              />
            </Button>
          </InputGroup>
        </Flex>
      </form>
    </Box>
  );
};

export default ContainerSendMessage;
