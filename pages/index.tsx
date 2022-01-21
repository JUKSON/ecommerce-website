import { Box, Flex, Heading, Img, Link, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import NextLink from "next/link";
import ProductsSection from "components/products-section";

const Home: NextPage = () => {
  return (
    <>
      <Box backgroundImage="url('/image-hero.jpg')" backgroundPosition="center">
        <Flex minH="90vh">
          <Flex flexDir="column" justifyContent="center" gap={6} ml={36}>
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
        <Flex
          bg="orange.600"
          borderRadius="10px"
          pt={[12, 12, 16, 36, 36]}
          px={[24, 24, 10, 16, 36]}
          gap={[12, 12, 24, 24, 24]}
          flexDir={{ base: "column", md: "row", lg: "row" }}
          alignItems="center"
        >
          <Img src="/image-speaker-zx9.png" w={[44, 52, 64, 96, 96]} />
          <Flex flexDir="column" gap={6}>
            <Heading
              color="white"
              fontSize={["2xl", "2xl", "4xl", "5xl", "6xl"]}
              maxW={80}
            >
              ZX9 SPEAKER
            </Heading>
            <Text
              fontSize={["xs", "xs", "sm", "md", "md"]}
              color="white"
              maxW={[168, 168, 80, 96, 96]}
              textAlign={["center", "inherit"]}
            >
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </Text>
            <NextLink href="/" passHref>
              <Link
                bg="black"
                color="white"
                textTransform="uppercase"
                textAlign="center"
                fontWeight="semibold"
                fontSize="small"
                letterSpacing={1}
                p={4}
                w={40}
                _hover={{ textDecoration: "none", bg: "gray" }}
                mt={4}
                mb={[10, 10, 0, 0, 0]}
              >
                See products
              </Link>
            </NextLink>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
