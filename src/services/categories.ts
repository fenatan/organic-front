import { gql } from '@apollo/client';

import api from './api';
import { Categories } from '../types/categories';

const CategoriesService = {
  async getAll(): Promise<Categories[]> {
    try {
      const { data } = await api.query({
        query: gql`
          query categories {
            categories {
              slug
              name
              id
            }
          }
        `,
      });
      return data.categories;
    } catch (e) {
      console.log({ e: e.networkError.result.errors });
    }
  },
};

export default CategoriesService;
