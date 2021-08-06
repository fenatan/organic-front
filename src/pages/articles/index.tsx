import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/react';
import Article from 'components/Article';

export default function ArticlePage() {
  const { query } = useRouter();

  return (
    <Box color="gray.50">
      <Box width="100%" height="286px" bg="gray.400" position="relative"></Box>
      <Box bgColor="black.100" px={20}>
        <Article />
      </Box>
    </Box>
  );
}
