import React from "react";
import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

import { links } from "util/links";

const NavLinks = () => {
  return (
    <Flex color="white" gap={7} display={["none", "none", "none", "flex"]}>
      {links.map((link) => {
        return (
          <NextLink key={link.id} href={link.url}>
            <Link
              fontSize="sm"
              fontWeight="bold"
              textTransform="uppercase"
              _hover={{ textDecoration: "none", color: "orange.500" }}
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
