import { Heading, Box, Link, Flex } from '@chakra-ui/react';

export default function Sidebar() {
  const categories = ['Descomplica', 'Design', 'Tecnologia'];
  const selectedCategory = 'Design';

  return (
    <Box mt={20} color="gray.50">
      <Heading fontSize="12px" fontWeight="700" mb={4}>
        CATEGORIAS
      </Heading>
      <Flex direction="column" justify="center">
        {categories &&
          categories.map((category) => (
            <Link
              key={category}
              _hover={{ cursor: 'pointer', textDecoration: 'none' }}
              _focus={{ boxShadow: 'none' }}
              size="sm"
              fontWeight={category === selectedCategory ? 'black' : 'normal'}
              mb={3}
              href={`/${category}`}
            >
              {category}
            </Link>
          ))}
      </Flex>
    </Box>
  );
}
