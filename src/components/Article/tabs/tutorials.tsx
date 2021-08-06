import { Heading, Text, Box } from '@chakra-ui/react';

export default function Article({ article }) {
  return (
    <>
      <Heading mb={14}>{article?.title}</Heading>
      {article?.tutorials.map((tutorial, idx) => (
        <Box mb={16} key={idx}>
          <Box mb={4} w="770px" h="300px" bg="gray.400">
            <iframe
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              src="https://www.youtube.com/embed/3pRdTmRxZAk"
              width="560"
              height="315"
            ></iframe>
          </Box>
          <Box maxW="770px">
            <Heading mb={2} fontSize="16px">
              {tutorial.title}
            </Heading>
            <Text textAlign="left">{tutorial.description}</Text>
          </Box>
        </Box>
      ))}
    </>
  );
}
