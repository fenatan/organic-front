import { Flex, Box, Heading } from '@chakra-ui/react';
import { Wrap, WrapItem } from '@chakra-ui/react';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Card from 'components/ArticleCard';
import Ads from 'components/Ads';

export default function HomePage() {
  return (
    <>
      <Box minH="100vh" bg="black.100" color="gray.50" px={20}>
        <Header />
        <Flex bg="black.100" mt={10}>
          <Sidebar />
          <Box ml={20}>
            <Heading mb={10}>Design</Heading>
            <Wrap spacing={5}>
              <WrapItem>
                <Card />
              </WrapItem>
              <WrapItem>
                <Card />
              </WrapItem>
              <WrapItem>
                <Card />
              </WrapItem>
              <WrapItem>
                <Card />
              </WrapItem>
              <WrapItem>
                <Card />
              </WrapItem>
              <WrapItem>
                <Card />
              </WrapItem>
              <WrapItem>
                <Card />
              </WrapItem>
              <WrapItem>
                <Card />
              </WrapItem>
              <WrapItem>
                <Card />
              </WrapItem>
            </Wrap>
          </Box>
        </Flex>
      </Box>
      <Box width="100%" bg="gray.400" color="gray.50" px={20}>
        <Ads />
      </Box>
    </>
  );
}
