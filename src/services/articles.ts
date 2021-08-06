import { gql } from '@apollo/client';
import { ArticleInput } from 'types/articles';

import api from './api';

async function getAll(): Promise<string> {
  const { data } = await api.query({
    query: gql`
      query Articles {

      }
    `,
  });

  return data.Articles;
}

async function getAllByCategory(slug: string): Promise<[]> {
  const { data } = await api.query({
    query: gql`
      query Articles {
        categories(where: { slug: "${slug}"}) {
          name
          articles {
            title
            author {
              username
            }
          }
        }
      }
    `,
  });
  return data?.categories[0]?.articles || [];
}

async function getArticleBySlug(slug: string): Promise<string> {
  const { data } = await api.query({
    query: gql`
      query Articles {
        Articles(where: $where) {
          title
        }
      }
    `,
    variables: {
      where: { slug },
    },
  });

  return data.Articles;
}
async function createArticle(createArticle: ArticleInput): Promise<string> {
  const { data } = await api.mutate({
    mutation: gql`
      mutation createArticle($input: createArticleInput) {
        createArticle(input: $input) {
          article {
            title
          }
        }
      }
    `,
    variables: {
      input: { data: createArticle },
    },
  });

  return data.Articles;
}

export { getAll, createArticle, getAllByCategory };
