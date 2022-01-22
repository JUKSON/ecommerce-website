import { Box, Center, Flex, Heading, Img, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

import React from "react";

const Headphones = () => {
  return (
    <Box>
      <Center bg="black" h={56}>
        <Heading color="white">HEADPHONES</Heading>
      </Center>
      <Flex as="section" mx={56}>
        <Flex as="article" gap={16} mt={32} flex="1">
          <Flex w="50%">
            <Flex flexDir="column" gap={8} justifyContent="center" w="100%">
              <Box
                as="span"
                color="orange.400"
                textTransform="uppercase"
                fontSize="sm"
                fontWeight="semibold"
                letterSpacing={8}
              >
                New product
              </Box>
              <Heading
                as="h4"
                color="black"
                textTransform="uppercase"
                fontSize="4xl"
                maxW="26rem"
              >
                XX99 Mark II Headphones
              </Heading>
              <Text color="gray.500" fontSize="sm" maxW={80}>
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </Text>
              <NextLink href="/home" passHref>
                <Link
                  bg="orange.400"
                  color="white"
                  textTransform="uppercase"
                  textAlign="center"
                  fontWeight="semibold"
                  fontSize="small"
                  letterSpacing={1}
                  p={4}
                  w={40}
                  _hover={{ textDecoration: "none", bg: "orange.300" }}
                  mt={4}
                >
                  See products
                </Link>
              </NextLink>
            </Flex>
          </Flex>
          <Box>
            <Img src="/image-xx99-mark-two.jpg" h="34rem" w="34rem" />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Headphones;
