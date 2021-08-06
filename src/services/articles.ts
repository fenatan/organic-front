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
          author {
            username
            email
          }
          created_at
          updated_at
          description
          content
          slug
          category {
            name
          }
          image {
            url
          }
          attachments {
            title
            file {
              url
            }
          }
          tutorials {
            title
            videoUrl
            description
          }
          cases {
            title
            description
            url
            image {
              url
            }
          }
          embeddeds {
            title
            urlEmbedded
          }
          tags {
            title
          }
        }
      }
    `,
  });

  return data.articles;
}

async function getAllByCategory(slug: string): Promise<[]> {
  const { data } = await api.query({
    query: gql`
      query Articles {
        categories(where: { slug: "${slug}"}) {
          name
          articles {
            title
            slug
            author {
              username
              email
            }
            created_at
            updated_at
            description
            content
            slug
            category {
              name
            }
            image {
              url
            }
            attachments {
              title
              file {
                url
              }
            }
            tutorials {
              title
              videoUrl
              description
            }
            cases {
              title
              description
              url
              image {
                url
              }
            }
            embeddeds {
              title
              urlEmbedded
            }
            tags {
              title
            }
          }
        }
      }
    `,
  });
  return data?.categories[0]?.articles || [];
}

async function getArticleBySlug(slug: string): Promise<ArticleInput> {
  const { data } = await api.query({
    query: gql`
      query articles($where: JSON) {
        articles(where: $where) {
          title
          slug
          author {
            username
            email
          }
          created_at
          updated_at
          description
          content
          slug
          category {
            name
          }
          image {
            url
          }
          attachments {
            title
            file {
              url
            }
          }
          tutorials {
            title
            videoUrl
            description
          }
          cases {
            title
            description
            url
            image {
              url
            }
          }
          embeddeds {
            title
            urlEmbedded
          }
          tags {
            title
          }
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
          slug
          author {
            username
            email
          }
          created_at
          updated_at
          description
          content
          slug
          category {
            name
          }
          image {
            url
          }
          attachments {
            title
            file {
              url
            }
          }
          tutorials {
            title
            videoUrl
            description
          }
          cases {
            title
            description
            url
            image {
              url
            }
          }
          embeddeds {
            title
            urlEmbedded
          }
          tags {
            title
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

export {
  getAll,
  createArticle,
  getMeArticles,
  getArticleBySlug,
  getAllByCategory,
};
