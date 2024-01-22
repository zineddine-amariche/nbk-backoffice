import {
  Avatar,
  Box,
  Flex,
  Skeleton,
  SkeletonCircle,
  Text,
} from "@chakra-ui/react";
import React from "react";
import useStore from "store";

function Receiver({ item,first }) {
  const LoadingUserSelected = useStore(
    (state) => state.channels.LoadingUserSelected
  );
  // const convert = (date) => {
  //   let app = parseInt(date.replace(/[:\s\/\.-]/g, ""));
  //   return app;
  // };

 
  const bg = item?.author == first  ? 'a' :'b'
  const bg1 = item?.author ==  first ? '#ddd' :'#eee'
  const justify = item?.author ==  first ? 'flex-end' :'flex-end'
const direction = item?.author ==  first ? "row" :"row-reverse"

  return (
    <Box display="flex" alignItems="center" mb={2} justifyContent={justify}  flexDirection={direction} >


      {LoadingUserSelected ? (
        <>
          <Skeleton w="300px" height="25px" ml="7" mt="15" borderRadius={20} />
        </>
      ) : (
        <Flex
          bg={bg1}
          boxShadow={"md"}
          borderRadius={20}
          px={3}
          h="30px"
          justifyContent={"center"}
          direction={"column"}
          alignItems="center"
          ml="6"
          mt="15"
        >
          <Text fontSize='md'>{item.body}</Text>
        </Flex>
      )}


      {LoadingUserSelected ? (
        <SkeletonCircle size="8" ml="7" mt="15" />
      ) : (
        <Avatar
          cursor="pointer"
          name={bg}
          src="https://bit.ly/tioluwani-kolawole"
          size="sm"
          mx="2"
          mt="15"
        />
      )}
    </Box>
  );
}

export default Receiver;
