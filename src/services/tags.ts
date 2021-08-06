import { gql } from '@apollo/client';

import api from './api';
import { Tags } from 'types/tags';

const TagsService = {
  async getAll(): Promise<Tags[]> {
    try {
      const { data } = await api.query({
        query: gql`
          query tags {
            tags {
              title
              id
            }
          }
        `,
      });
      return data.tags;
    } catch (e) {
      console.log({ e: e });
    }
  },
};

export default TagsService;
