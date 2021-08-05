import { gql } from '@apollo/client';

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

export { getAll };
