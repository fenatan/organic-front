import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/react';
import Article from 'components/Article';
import { getAll, getArticleBySlug } from 'services/articles';

export async function getStaticPaths() {
  const articles = await getAll();
  console.log({ articles });
  return {
    paths: articles
      .filter((k) => k.slug)
      .map((a) => ({
        params: {
          id: a.slug,
        },
      })),
    fallback: true,
  };
}

export async function getStaticProps() {
  const article = await getArticleBySlug('sdfsdfsdfdsdsf');
  return {
    props: {
      article,
    },
  };
}

export default function ArticlePage({ article }) {
  const { query } = useRouter();

  return (
    <Box color="gray.50">
      <Box width="100%" height="286px" bg="gray.400" position="relative"></Box>
      <Box bgColor="black.100" px={20}>
        <Article article={article} />
      </Box>
    </Box>
  );
}
