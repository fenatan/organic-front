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
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          w="405px"
          height="351px"
          bg="gray.100"
          mr={10}
          position="relative"
          cursor="pointer"
        >
          <Image src={'/images/Banner-Triplo-separado.svg'} layout={'fill'} />
        </Box>
        <Box
          w="405px"
          height="351px"
          bg="gray.100"
          mr={10}
          position="relative"
          cursor="pointer"
        >
          <Image src={'/images/Banner-Triplo-separado2.svg'} layout={'fill'} />
        </Box>
        <Box
          w="405px"
          height="351px"
          bg="gray.100"
          position="relative"
          cursor="pointer"
        >
          <Image src={'/images/Banner-Triplo-separado3.svg'} layout={'fill'} />
        </Box>
      </Box>
    </Flex>
  );
}
