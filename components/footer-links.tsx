import React from "react";
import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

import { links } from "util/links";

const FooterLinks = () => {
  return (
    <Flex color="white" gap={8} display={["none", "none", "none", "flex"]}>
      {links.map((link) => {
        return (
          <NextLink key={link.id} href={link.url}>
            <Link
              fontSize="sm"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing={2}
              _hover={{ textDecoration: "none", color: "orange.500" }}
              color="white"
            >
              {link.text}
            </Link>
          </NextLink>
        );
      })}
    </Flex>
  );
};

export default FooterLinks;
