import {
  Heading,
  Box,
  Wrap,
  WrapItem,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';

export default function UseCases({ article }) {
  function goUrl(url) {
    window.location = url;
  }
  return (
    <>
      <Box mb={8}>
        <Heading mb={14}>{article.title}</Heading>
        <Wrap spacing={5}>
          {article.cases.map((item, i) => (
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
                >
                  <Image src={item.image?.url} layout={'fill'}></Image>
                </Box>
                <Heading mx={4} mt={4} fontSize="16px">
                  {item.title}
                </Heading>
                <Text
                  maxH="160px"
                  overflowY="auto"
                  mx={4}
                  fontSize="16px"
                  mt={2}
                  textAlign="left"
                >
                  {item.description}
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
                  onClick={() => goUrl(item.url)}
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
