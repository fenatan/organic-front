/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';
import { Wrap, WrapItem } from '@chakra-ui/react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Card from 'components/ArticleCard';
import Ads from 'components/Ads';

import CategoriesService from 'services/categories';
import { getAllByCategory } from 'services/articles';

export async function getStaticProps() {
  const categories = await CategoriesService.getAll();
  return {
    props: {
      categories,
    },
  };
}

export default function HomePage({ categories }) {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const getArticles = async (category: any) => {
    const newArticles = await getAllByCategory(category.slug);
    setArticles(newArticles || []);
    setSelectedCategory(category.name);
  };

  useEffect(() => {
    getArticles(categories[0]);
  }, [categories]);

  return (
    <>
      <Box minH="100vh" bg="black.100" color="gray.50" px={20}>
        <Header />
        <Flex bg="black.100" mt={10}>
          <Sidebar categories={categories} onSelectCategory={getArticles} />
          <Box ml={20}>
            <Heading mb={10}>{selectedCategory || 'Descomplica'}</Heading>
            <Wrap spacing={5}>
              {articles.map((article) => (
                <WrapItem key={article?.id}>
                  <Card article={article} />
                </WrapItem>
              ))}
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
