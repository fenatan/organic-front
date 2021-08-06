/* eslint-disable @typescript-eslint/no-explicit-any */
import { Heading, Box, Link, Flex } from '@chakra-ui/react';

export default function Sidebar({
  categories,
  selectedCategory,
  onSelectCategory,
}: any) {
  return (
    <Box mt={20} color="gray.50">
      <Heading fontSize="12px" fontWeight="700" mb={4}>
        CATEGORIAS
      </Heading>
      <Flex direction="column" justify="center">
        {categories &&
          categories.map((category) => (
            <Link
              key={category.slug}
              _hover={{ cursor: 'pointer', textDecoration: 'none' }}
              _focus={{ boxShadow: 'none' }}
              size="sm"
              fontWeight={
                category.slug == selectedCategory ? 'black' : 'normal'
              }
              mb={3}
              onClick={() => onSelectCategory(category)}
            >
              {category.name}
            </Link>
          ))}
      </Flex>
    </Box>
  );
}
