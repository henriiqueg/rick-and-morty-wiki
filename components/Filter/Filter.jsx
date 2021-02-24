import {
  FormControl,
  FormLabel,
  FormHelperText,
  Flex,
  Input,
  Button,
} from '@chakra-ui/react';

const Filter = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <Flex w={['xs', 'xs', 'md', 'lg']} maxW="full" alignItems="center">
        <FormControl id="query">
          <FormLabel>Search</FormLabel>
          <Input
            type="text"
            placeholder="Enter a character name..."
            name="query"
          />
          <FormHelperText>Search for any character</FormHelperText>
        </FormControl>
        <Button colorScheme="primary" type="submit" variant="search">
          SEARCH
        </Button>
      </Flex>
    </form>
  );
};

export default Filter;
