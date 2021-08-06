import { Heading, Box } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

export default function Sidebar() {
  const categories = ['Descomplica', 'Design', 'Tecnologia'];
  const selectedCategory = 'Design';

  return (
    <Box bg="black.100" w="20%" h="100vh" px={20} py={20} color="gray.50">
      <Heading fontSize="12px" fontWeight="700" mb={4}>
        CATEGORIAS
      </Heading>

      {categories &&
        categories.map((category) => (
          <Link
            display="flex"
            key={category}
            _hover={{ cursor: 'pointer', textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}
            href="/login"
            size="sm"
            fontWeight={category === selectedCategory ? 'black' : 'normal'}
            mb={3}
            to="/login"
          >
            {category}
          </Link>
        ))}
    </Box>
  );
}
