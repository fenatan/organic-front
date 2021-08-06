/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import { Box, Heading } from '@chakra-ui/react';

export default function blogPostWithImage() {
  return (
    <Box mb={5}>
      <Box
        cursor="pointer"
        position="relative"
        overflow={'hidden'}
        bg="gray.300"
        w="230px"
        h="140px"
        style={{ borderRadius: '16px' }}
        mb={2}
      >
        <Image
          src={
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
          layout={'fill'}
        />
      </Box>
      <Box maxW="230px">
        <Heading cursor="pointer" color="white.100" mb={1} fontSize="20px">
          Title asdf asdf asdf asdfsaf asdfasdf
        </Heading>
        <Heading
          cursor="pointer"
          color="white.100"
          fontSize="12px"
          fontWeight="light"
        >
          Author
        </Heading>
      </Box>
    </Box>
  );
}
