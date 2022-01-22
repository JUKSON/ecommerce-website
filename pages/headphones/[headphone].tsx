import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Img,
  Link,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

const Headphone = () => {
  const { back } = useRouter();

  return (
    <Box>
      <Flex as="section" mx={56} mt={16} flexDir="column">
        <Box onClick={() => back()} as="span" color="gray.400" cursor="pointer">
          Go back
        </Box>
        <Flex as="article" gap={32} flex="1" mt={8} flexDir="row-reverse">
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
              <Flex flexDir="column" gap={2}>
                <Text fontSize="xl" fontWeight="semibold">
                  200000
                </Text>
                <Flex gap={4} alignItems="center">
                  <Flex alignItems="center" gap={1}>
                    <Button borderRadius={0} h="51px" w={14}>
                      -
                    </Button>
                    <Text fontWeight="semibold">1</Text>
                    <Button borderRadius={0} h="51px" w={14}>
                      +
                    </Button>
                  </Flex>
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
                    >
                      ADD TO CART
                    </Link>
                  </NextLink>
                </Flex>
              </Flex>
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

export default Headphone;
