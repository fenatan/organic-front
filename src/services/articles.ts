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

export { getAll, createArticle };
