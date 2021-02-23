import { Box, Flex, Text, Image } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box
        bgImage="url('/img/bg-footer.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        w="100%"
        maxH="xs"
        p={5}
        d="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Flex alignItems="center" justifyContent="center">
          <Text fontWeight="bold" color="black">
            MADE WITH 💓 BY
          </Text>
          <Image src="img/loomi-logo.png" alt="Loomi" />
          <Text fontWeight="bold" color="black">
            DEVELOPERS
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
