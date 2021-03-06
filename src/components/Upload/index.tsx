import { Box } from '@chakra-ui/react';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { upload } from 'services/upload';

type FileUploadProps = {
  handleFile(fileId: number): Promise<void>;
};

function FileUpload(props: FileUploadProps) {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach(async (file) => {
      const id = await upload({
        file,
      });
      props.handleFile(id);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box padding="10" bg="#999" borderRadius="5" {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Largue os arquivos aqui</p>
      ) : (
        <p>Drag n drop some files here, or click to select files</p>
      )}
    </Box>
  );
}

export { FileUpload };
