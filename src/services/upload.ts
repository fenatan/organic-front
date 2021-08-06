import { gql } from '@apollo/client';
import { UplodFileInput } from 'types/upload';

import { uploadClient } from './api';

async function upload(upload: UplodFileInput): Promise<number> {
  const { data } = await uploadClient.mutate({
    mutation: gql`
      mutation ($file: Upload!) {
        upload(file: $file) {
          id
          name
        }
      }
    `,
    variables: {
      file: upload.file,
    },
  });

  return +data.upload.id;
}

export { upload };
