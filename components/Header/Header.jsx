import Head from "next/head";
import { Box, Flex, Image, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Head>
        <title>Rick and Morty Wiki</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Box
        bgImage="url('/img/bg-hero.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        w="100%"
        minH={["xs", "xs", "sm"]}
        p={5}
        d="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image src="img/logo-rm.png" alt="The Rick and Morty WIKI" />
          <Heading as="h2" size="md" color="black">
            THE RICK AND MORTY WIKI
          </Heading>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
