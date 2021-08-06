import { gql } from '@apollo/client';

import api from './api';

export interface RoleDto {
  name: string;
}
export interface UserDto {
  id: string;
  username: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  role: RoleDto;
}
async function login(email: string, password: string): Promise<string> {
  const { data } = await api.mutate({
    mutation: gql`
      mutation {
        login(input: { identifier: "${email}", password: "${password}" }) {
          jwt
        }
      }    
    `,
  });

  return data.login.jwt;
}

async function me(): Promise<UserDto> {
  const { data } = await api.query({
    query: gql`
      query {
        me {
          id
          username
          email
          confirmed
          blocked
          role {
            name
          }
        }
      }
    `,
  });

  return data.me;
}

export { login, me };
