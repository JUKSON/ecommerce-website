import type { AppProps } from "next/app";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "components/layout";
import "@fontsource/manrope";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    fonts: {
      heading: "Manrope",
      body: "Manrope",
    },
    colors: {
      black: "#191919",
      "orange.550": "#d87d4a",
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
