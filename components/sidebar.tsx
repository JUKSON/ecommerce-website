import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Img,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { links } from "util/links";
import Logo from "./logo";
import NextLink from "next/link";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box onClick={onOpen} display={{ lg: "none" }} cursor="pointer">
        <HamburgerIcon boxSize={6} color="white" />
      </Box>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Box color="red">
              <Logo fill="black" />
            </Box>
          </DrawerHeader>
          <DrawerBody display="flex" flexDir="column" marginTop={16}>
            {links.map((link) => {
              return (
                <NextLink key={link.id} href={link.url}>
                  <Link
                    onClick={onClose}
                    fontSize="2xl"
                    fontWeight="bold"
                    textTransform="uppercase"
                    textAlign="center"
                    _hover={{
                      textDecoration: "none",
                      color: "orange.500",
                      bg: "gray.200",
                    }}
                  >
                    {link.text}
                  </Link>
                </NextLink>
              );
            })}
            <Flex justifyContent="center" position="relative" mt={6}>
              <Img src="empty-cart.png" boxSize={12} />
              <Flex
                position="absolute"
                top="0"
                right={24}
                justifyContent="center"
                alignItems="center"
                bg="orange"
                borderRadius="full"
                w={6}
                h={6}
              >
                <Box as="span" fontWeight="semibold">
                  0
                </Box>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
