import { Heading, Box, Wrap, WrapItem, Text, Button } from '@chakra-ui/react';

export default function UseCases() {
  return (
    <>
      <Box mb={8}>
        <Heading mb={14}>Título</Heading>
        <Wrap spacing={5}>
          {[1, 2, 3, 4].map((i) => (
            <WrapItem key={i}>
              <Box
                mb={5}
                position="relative"
                w="240px"
                h="420px"
                border="2px solid #666666"
                borderRadius="16px"
              >
                <Box
                  overflow="hidden"
                  position="relative"
                  h="180px"
                  bg="gray.400"
                  borderRadius="16px 16px 0px 0px"
                  display="flex"
                ></Box>
                <Heading mx={4} mt={4} fontSize="16px">
                  Título
                </Heading>
                <Text
                  maxH="160px"
                  overflowY="auto"
                  mx={4}
                  fontSize="16px"
                  mt={2}
                  textAlign="left"
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat.
                </Text>
                <Button
                  ml={8}
                  mr={8}
                  mt={4}
                  size="sm"
                  fontSize="14px"
                  w="160px"
                  h="40px"
                  borderRadius="3xl"
                  border="none"
                  color="black.100"
                  bg="primary.100"
                  _focus={{
                    boxShadow: '',
                  }}
                  _hover={{
                    opacity: '0.8',
                  }}
                >
                  Acesse aqui
                </Button>
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </>
  );
}
