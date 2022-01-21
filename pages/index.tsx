import { Box, Flex, Heading, Img, Link, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import NextLink from "next/link";
import ProductsSection from "components/products-section";

const Home: NextPage = () => {
  return (
    <>
      <Box backgroundImage="url('/image-hero.jpg')" backgroundPosition="center">
        <Flex minH="90vh">
          <Flex flexDir="column" justifyContent="center" gap={6} ml={32}>
            <Box
              as="span"
              color="gray"
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="semibold"
              letterSpacing={8}
            >
              New product
            </Box>
            <Heading
              as="h1"
              color="white"
              textTransform="uppercase"
              size="3xl"
              maxW="26rem"
            >
              XX99 Mark II Headphones
            </Heading>
            <Text color="whiteAlpha.700" fontSize="sm" maxW={80}>
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
      </Box>
      <Flex alignItems="center" mt={24} gap={12} flexDir="column">
        <ProductsSection />
        <Flex>
          <Img />
          <Flex>
            <Text>aaa</Text>
            <Text>aaa</Text>
            <Text>aaa</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
