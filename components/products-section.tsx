import React from "react";
import { Flex, Img, Link, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const ProductsSection = () => {
  return (
    <Flex justifyContent="center">
      <Flex gap={10}>
        <Flex
          bg="gray.100"
          borderRadius="5px"
          flexDir="column"
          h={40}
          w="22rem"
          alignItems="center"
          justifyContent="flex-end"
          position="relative"
          pb={4}
          gap={2}
        >
          <Img
            src="/image-headphones.png"
            position="absolute"
            w={36}
            top="-40px"
          />
          <Text
            textTransform="uppercase"
            fontSize="medium"
            fontWeight="semibold"
            letterSpacing={2}
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
          bg="gray.100"
          borderRadius="5px"
          flexDir="column"
          h={40}
          w="22rem"
          alignItems="center"
          justifyContent="flex-end"
          position="relative"
          pb={4}
          gap={2}
        >
          <Img
            src="/image-speakers.png"
            position="absolute"
            w={36}
            top="-40px"
          />
          <Text
            textTransform="uppercase"
            fontSize="medium"
            fontWeight="semibold"
            letterSpacing={2}
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
          bg="gray.100"
          borderRadius="5px"
          flexDir="column"
          h={40}
          w="22rem"
          alignItems="center"
          justifyContent="flex-end"
          position="relative"
          pb={4}
          gap={2}
        >
          <Img
            src="/image-earphones.png"
            position="absolute"
            w={36}
            top="-40px"
          />
          <Text
            textTransform="uppercase"
            fontSize="medium"
            fontWeight="semibold"
            letterSpacing={2}
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
    </Flex>
  );
};

export default ProductsSection;
