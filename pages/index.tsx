import { Box, chakra, Flex, Heading, Img, Link, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import NextLink from "next/link";
import ProductsSection from "components/products-section";

const Home: NextPage = () => {
  return (
    <>
      <Box backgroundImage="url('/image-hero.jpg')" backgroundPosition="center">
        <Flex minH="90vh">
          <Flex flexDir="column" justifyContent="center" gap={6} ml={52}>
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
      <Flex mt={24} gap={12} flexDir="column" mx={56}>
        <ProductsSection />
        <Flex
          bg="orange.550"
          borderRadius="10px"
          pt={36}
          px={36}
          gap={24}
          flexDir={{ base: "column", md: "row", lg: "row" }}
        >
          <Img src="/image-speaker-zx9.png" w={96} />
          <Flex flexDir="column" gap={6}>
            <Heading color="white" fontSize="6xl" maxW={80} letterSpacing={6}>
              ZX9 SPEAKER
            </Heading>
            <Text fontSize="md" color="white" maxW={96} fontWeight="light">
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
                p={3}
                w={40}
                _hover={{ textDecoration: "none", bg: "gray" }}
                mt={4}
              >
                See products
              </Link>
            </NextLink>
          </Flex>
        </Flex>
        <Flex position="relative">
          <Flex
            flexDir="column"
            position="absolute"
            top="40%"
            left="5%"
            gap={3}
          >
            <Heading textTransform="uppercase" size="lg">
              Zx7 speaker
            </Heading>
            <NextLink href="/" passHref>
              <Link
                bg="transparent"
                color="black"
                textTransform="uppercase"
                textAlign="center"
                fontWeight="semibold"
                fontSize="small"
                letterSpacing={1}
                border="1px"
                borderColor="black"
                p={3}
                w={40}
                _hover={{ textDecoration: "none", bg: "black", color: "white" }}
                mt={4}
              >
                See products
              </Link>
            </NextLink>
          </Flex>
          <Img src="/image-speaker-zx7.jpg" width="100vw" borderRadius="10px" />
        </Flex>
        <Flex gap={8}>
          <Img src="/image-earphones-yx1.jpg" borderRadius="10px" w="50vw" />
          <Flex
            bg="gray.100"
            flexDir="column"
            w="50vw"
            justifyContent="center"
            pl={24}
          >
            <Heading fontSize="3xl" textTransform="uppercase" margin={2}>
              YX1 Earphones
            </Heading>
            <NextLink href="/" passHref>
              <Link
                bg="transparent"
                color="black"
                textTransform="uppercase"
                textAlign="center"
                fontWeight="semibold"
                fontSize="small"
                letterSpacing={1}
                border="1px"
                borderColor="black"
                p={3}
                w={40}
                _hover={{ textDecoration: "none", bg: "black", color: "white" }}
                mt={4}
              >
                See products
              </Link>
            </NextLink>
          </Flex>
        </Flex>
        <Flex mt={16}>
          <Flex flexDir="column" justifyContent="center" gap={8} pr={20}>
            <Heading textTransform="uppercase" fontSize="4xl" letterSpacing={2}>
              Bringing you the{" "}
              <chakra.span color="orange.400">best</chakra.span> audio gear
            </Heading>
            <Text
              color="gray.500"
              fontWeight="light"
              fontSize="sm"
              letterSpacing="wide"
            >
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </Text>
          </Flex>
          <Img src="/image-best-gear.jpg" />
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
