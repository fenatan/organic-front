import {
  Heading,
  Box,
  Button,
  Text,
  WrapItem,
  Wrap,
  Image,
  Flex,
} from '@chakra-ui/react';
import Header from 'components/Header';
import AuthContext from 'contexts/auth';
import { useContext, useState } from 'react';
import { ArticleInput } from 'types/articles';
import { getMeArticles } from 'services/articles';
import { useEffect } from 'react';
import router from 'next/router';

export default function Login() {
  const [articles, setArticles] = useState<Array<ArticleInput> | Array<null>>(
    []
  );
  const context = useContext(AuthContext);
  useEffect(() => {
    async function fetchData() {
      if (context.user) {
        const art = await getMeArticles(+context.user.id);
        setArticles(art);
      }
    }
    fetchData();
  }, []);

  function goTo(slug) {
    router.push('/articles/' + slug);
  }

  return (
    <>
      <Box minH="100vh" bg="black.100" color="gray.50" px={20}>
        <Header />
        <Box maxWidth="900px" margin="30px auto">
          <Flex justifyContent={'space-between'}>
            <Heading mb={5} mt={4} textAlign="left">
              Meus artigos
            </Heading>
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
              onClick={() => router.push('/publish')}
            >
              + Novo
            </Button>
          </Flex>
          <Box>
            <Wrap spacing={5}>
              {articles?.map((i) => (
                <WrapItem key={i.id}>
                  <Box
                    mb={5}
                    position="relative"
                    w="240px"
                    border="2px solid #666666"
                    borderRadius="16px"
                    pb="20px"
                  >
                    <Box
                      overflow="hidden"
                      position="relative"
                      h="180px"
                      bg="gray.400"
                      borderRadius="16px 16px 0px 0px"
                      display="flex"
                    >
                      <Image src={i?.image?.url} layout={'fill'}></Image>
                    </Box>
                    <Heading mx={4} mt={4} fontSize="16px">
                      {i?.title}
                    </Heading>
                    <Text
                      maxH="160px"
                      overflowY="auto"
                      mx={4}
                      fontSize="16px"
                      mt={2}
                      textAlign="left"
                    >
                      {i?.content}
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
                      onClick={() => goTo(i.slug)}
                    >
                      Acesse aqui
                    </Button>
                  </Box>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        </Box>
      </Box>
    </>
  );
}
