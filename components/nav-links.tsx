import React from "react";
import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

import { links } from "util/links";
import { useRouter } from "next/router";

const NavLinks = () => {
  const { asPath } = useRouter();

  return (
    <Flex color="white" gap={8}>
      {links.map((link) => {
        return (
          <NextLink key={link.id} href={link.url}>
            <Link
              fontSize="sm"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing={2}
              _hover={{ textDecoration: "none", color: "orange.500" }}
              color={asPath === link.url ? "orange.500" : "white"}
            >
              {link.text}
            </Link>
          </NextLink>
        );
      })}
    </Flex>
  );
};

export default NavLinks;
