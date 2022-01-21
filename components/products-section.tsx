import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const ProductsSection = () => {
  return (
    <>
      <Flex
        gap={[16, 16, 8, 14, 16]}
        flexDir={{ base: "column", md: "row", lg: "row" }}
      >
        <Flex
          bg="gray.200"
          flexDir="column"
          h={36}
          // w={{ md: 56, lg: 80 }}
          w={[80, 80, 56, 64, 80]}
          alignItems="center"
          justifyContent="flex-end"
          position="relative"
          pb={4}
          gap={2}
        >
          <Img
            src="/image-headphones.png"
            position="absolute"
            w={32}
            top="-40px"
          />
          <Text
            textTransform="uppercase"
            fontSize="small"
            fontWeight="semibold"
          >
            Headphones
          </Text>
          <Flex>
            <NextLink href="/headphones">
              <Link display="flex" _hover={{ textDecoration: "none" }}>
                <Text textTransform="uppercase" fontSize="xs" color="gray.600">
                  shop
                </Text>
                <ChevronRightIcon color="orange.500" />
              </Link>
            </NextLink>
          </Flex>
        </Flex>
        <Flex
          bg="gray.200"
          flexDir="column"
          h={36}
          w={[80, 80, 56, 64, 80]}
          alignItems="center"
          justifyContent="flex-end"
          position="relative"
          pb={4}
          gap={2}
        >
          <Img
            src="/image-speakers.png"
            position="absolute"
            w={32}
            top="-40px"
          />
          <Text
            textTransform="uppercase"
            fontSize="small"
            fontWeight="semibold"
          >
            Speakers
          </Text>
          <Flex>
            <NextLink href="/speakers">
              <Link display="flex" _hover={{ textDecoration: "none" }}>
                <Text textTransform="uppercase" fontSize="xs" color="gray.600">
                  shop
                </Text>
                <ChevronRightIcon color="orange.500" />
              </Link>
            </NextLink>
          </Flex>
        </Flex>
        <Flex
          bg="gray.200"
          flexDir="column"
          h={36}
          w={[80, 80, 56, 64, 80]}
          alignItems="center"
          justifyContent="flex-end"
          position="relative"
          pb={4}
          gap={2}
        >
          <Img
            src="/image-earphones.png"
            position="absolute"
            w={32}
            top="-40px"
          />
          <Text
            textTransform="uppercase"
            fontSize="small"
            fontWeight="semibold"
          >
            Earphones
          </Text>
          <Flex>
            <NextLink href="/earphones">
              <Link display="flex" _hover={{ textDecoration: "none" }}>
                <Text textTransform="uppercase" fontSize="xs" color="gray.600">
                  shop
                </Text>
                <ChevronRightIcon color="orange.500" />
              </Link>
            </NextLink>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default ProductsSection;
