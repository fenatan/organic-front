/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import { Flex, Box, Heading } from '@chakra-ui/react';

export default function Ads() {
  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Heading fontSize="32px" mt={'40px'}>
        Conheça também
      </Heading>
      <Box
        m="40px"
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w="330px"
          h="200px"
          bg="gray.100"
          mr={10}
          position="relative"
          cursor="pointer"
        >
          <Image
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            layout={'fill'}
          />
        </Box>
        <Box
          w="330px"
          h="200px"
          bg="gray.100"
          mr={10}
          position="relative"
          cursor="pointer"
        >
          <Image
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            layout={'fill'}
          />
        </Box>
        <Box
          w="330px"
          h="200px"
          bg="gray.100"
          position="relative"
          cursor="pointer"
        >
          <Image
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            layout={'fill'}
          />
        </Box>
      </Box>
    </Flex>
  );
}
