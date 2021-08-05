import { Heading, Box } from '@chakra-ui/react';

export default function Login() {
  return (
    <Box bg="primary.100" w="100%" p={4} color="white">
      <Heading size="lg">
        {process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/graphql'}
      </Heading>
    </Box>
  );
}
