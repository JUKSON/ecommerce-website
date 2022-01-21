import { Box, Flex, Grid, Img } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import NavLinks from "./nav-links";
import Sidebar from "./sidebar";

const Navbar = () => {
  return (
    <>
      <Grid h={24} bg="black" maxW="100vw">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          mx={{ base: 6, md: 16, lg: 32 }}
          borderBottom="1px"
          color="whiteAlpha.400"
        >
          <Sidebar />
          <NextLink href="/">
            <Img src="/logo.svg" height={7} cursor="pointer" />
          </NextLink>
          <NavLinks />
          <Box>
            <Img src="/icon-cart.svg" alt="" />
          </Box>
        </Flex>
      </Grid>
    </>
  );
};

export default Navbar;
