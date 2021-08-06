import { gql } from '@apollo/client';
import { ArticleInput } from 'types/articles';

import api from './api';

async function getAll(): Promise<ArticleInput[]> {
  const { data } = await api.query({
    query: gql`
      query articles {
        articles {
          title
          slug
        }
      }
    `,
  });

  return data.articles;
}

async function getArticleBySlug(slug: string): Promise<ArticleInput> {
  const { data } = await api.query({
    query: gql`
      query articles($where: JSON) {
        articles(where: $where) {
          title
        }
      }
    `,
    variables: {
      where: { slug },
    },
  });

  return data.articles[0];
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

async function getMeArticles(userId: number): Promise<ArticleInput[]> {
  const { data } = await api.query({
    query: gql`
      query articles($where: JSON) {
        articles(where: $where) {
          title
          content
          slug
          image {
            url
          }
        }
      }
    `,
    variables: {
      where: { 'author.id': userId },
    },
  });

  return data.articles;
}

export { getAll, createArticle, getMeArticles, getArticleBySlug };
