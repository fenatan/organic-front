import { Heading, Text, Box } from '@chakra-ui/react';

export default function Article() {
  return (
    <>
      <Heading mb={14}>Título</Heading>
      <Box mb={16}>
        <Box mb={4} w="770px" h="300px" bg="gray.400"></Box>
        <Box maxW="770px">
          <Heading mb={2} fontSize="16px">
            Título
          </Heading>
          <Text textAlign="left">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </Text>
        </Box>
      </Box>

      <Box mb={16}>
        <Box mb={4} w="770px" h="300px" bg="gray.400"></Box>
        <Box maxW="770px">
          <Heading mb={2} fontSize="16px">
            Título
          </Heading>
          <Text textAlign="left">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </Text>
        </Box>
      </Box>
    </>
  );
}
