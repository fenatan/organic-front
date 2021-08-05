import { Heading, Box } from '@chakra-ui/react';
import CategoriesService from 'services/categories';

export default function HomePage({ categories }) {
  return (
    <Box bg="primary.100" w="100%" p={4} color="white">
      <Heading size="lg">Organic Team - {categories}</Heading>
    </Box>
  );
}

export async function getServerSideProps() {
  try {
    const categories = await CategoriesService.getAll();

    return {
      props: {
        categories: categories,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        categories: 'fail',
      },
    };
  }
}
