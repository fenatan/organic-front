import { gql } from '@apollo/client';

import api from './api';

async function login(): Promise<string> {
  const { data } = await api.query({
    query: gql`
      query Login {

      }
    `,
  });

  return data.Login;
}

export { login };
