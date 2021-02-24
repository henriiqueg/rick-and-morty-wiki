import {
  Box,
  Flex,
  Image,
  Center,
  Text,
  Tooltip,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';

const CharacterCard = ({ name, image, status, species, type, gender }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cardBg = useColorModeValue('primary.700', 'gray.700');

  return (
    <>
      <Tooltip label="Click to see more" aria-label="A tooltip">
        <Box
          w="xs"
          maxH="20"
          borderRadius="xl"
          overflow="hidden"
          bg={cardBg}
          onClick={onOpen}
          cursor="pointer"
        >
          <Flex>
            <Image
              src={image}
              alt={`${name} Thumb`}
              fallbackSrc="https://via.placeholder.com/80"
              maxW="20"
              mr="4"
            />
            <Center flex="1" justifyContent="start">
              <Text fontSize="xl" fontWeight="bold">
                {name}
              </Text>
            </Center>
          </Flex>
        </Box>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>About {name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="md" mb={3}>
              <Text fontWeight="bold">Name:</Text> {name}
            </Text>
            <Text fontSize="md" mb={3}>
              <Text fontWeight="bold">Status:</Text>
              {status}
            </Text>
            <Text fontSize="md" mb={3}>
              <Text fontWeight="bold">Species:</Text>
              {species}
            </Text>
            <Text fontSize="md" mb={3}>
              <Text fontWeight="bold">Type:</Text>
              {type}
            </Text>
            <Text fontSize="md" mb={3}>
              <Text fontWeight="bold">Gender:</Text>
              {gender}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="primary" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CharacterCard;
