import React, { useState } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Button,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import logo from "images/logo.png";
import routes from "routes";
import useStore from "store";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};
export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [Show, setShow] = useState(false);
  const Close = () => {
    setShow(false);
  };
  const handleShowForm = () => {
    setShow(true);
  };

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.50", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} handleShowForm={handleShowForm} />
      <Box pb="16" ml={{ base: 0, md: "350px" }}>
        <motion.div
          variants={variants}
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: "linear" }}
        >
          {children}
        </motion.div>
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg="#2DDCB1"
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: "350px" }}
      overflowY="auto"
      pos="fixed"
      h="full"
      color="white"
      {...rest}
    >
      <Flex my="16" alignItems="center" mx="8" justifyContent="space-between">
        <Flex
          w="full"
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={logo} alt=""></Image>
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            LAYMOON
          </Text>
        </Flex>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Box mb="16">
        {routes.map(
          (route) =>
            route.protected &&
            route.sidbarlist && (
              <NavItem
                key={route.label}
                icon={route.icon}
                path={route.path}
                menu={route.menu}
                nested={route.nested}
              >
                {route.label}
              </NavItem>
            )
        )}
      </Box>
    </Box>
  );
};

const NavItem = ({ icon, children, path, menu, nested, ...rest }) => {
  return (
    <>
      {menu ? (
        <Accordion allowMultiple>
          <AccordionItem border="none">
            <AccordionButton p="0" outline="none" border="none" w="full">
              <Flex
                w="full"
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                fontWeight="bold"
                _hover={{
                  // bg: "linear-gradient(to right, #56ab2f, #a8e063)",
                  bg: "#eeeeee",
                  color: "black",
                  fontWeight: "bold",
                }}
                {...rest}
              >
                {icon && (
                  <Icon
                    mr="4"
                    fontSize="16"
                    _groupHover={{
                      color: "black",
                    }}
                    as={icon}
                  />
                )}
                <Flex
                  w="full"
                  align="center"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <h2>{children}</h2>
                  <FiChevronDown></FiChevronDown>
                </Flex>
              </Flex>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <UnorderedList ml="16">
                {nested.map((route) => (
                  <Box m="2" key={route.label}>
                    <Link to={route.path}>
                      <ListItem color="#faffba" fontWeight="bold">
                        {route.label}
                      </ListItem>
                    </Link>
                  </Box>
                ))}
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ) : (
        <Link
          to={path}
          style={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
        >
          <Flex
            align="center"
            p="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            fontWeight="bold"
            _hover={{
              // bg: "linear-gradient(to right, #56ab2f, #a8e063)",
              bg: "#eeeeee",
              color: "black",
              fontWeight: "bold",
            }}
            {...rest}
          >
            {icon && (
              <Icon
                mr="4"
                fontSize="16"
                _groupHover={{
                  color: "black",
                }}
                as={icon}
              />
            )}
            {children}
          </Flex>
        </Link>
      )}
    </>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const logout = useStore((state) => state.logout);
  const getAppToken = useStore((state) => state.getAppToken);
  const handleLogout = async () => {
    logout();
    await getAppToken();
  };

  return (
    <Flex
      ml={{ base: 0, md: "350px" }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      {/* <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text> */}
      <Image
        w="50px"
        display={{ base: "flex", md: "none" }}
        src={logo}
        alt=""
      ></Image>

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  //   src={
                  //     'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  //   }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Reda BEKKA</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              {/* <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider /> */}
              <Link to="/users/add">
                <MenuItem>Créer un compte</MenuItem>
              </Link>
              <MenuDivider />
              <MenuItem onClick={handleLogout}>Se déconnecter</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
