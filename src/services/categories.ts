import { gql } from '@apollo/client';

import api from './api';
import { Categories } from '../types/categories';

async function getAllCategories(): Promise<Categories[]> {
  const { data } = await api.query({
    query: gql`
      query Categories {
        Categories {
          slug
          name
        }
      }
    `,
  });

  return data.Categories;
}

export { getAllCategories };
