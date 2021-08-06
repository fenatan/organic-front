import {
  Heading,
  HStack,
  Box,
  Icon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';

import { FiEye, FiDownload } from 'react-icons/fi';

export default function Files({ article }) {
  function goUrl(url) {
    window.location = url;
  }
  return (
    <>
      <Heading mb={14}>{article?.title}</Heading>
      {article?.attachments?.map((item, i) => (
        <Box
          key={i}
          mb={8}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          h="80px"
          border="1px solid #FFFFFF"
          borderRadius="16px"
        >
          <Box ml={8}>
            <Heading fontSize="16px" mb={1}>
              {item.title}
            </Heading>
            <Heading fontSize="16px" fontWeight="normal">
              {item.title} - 05/08/2021
            </Heading>
          </Box>
          <Box
            mr={8}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Breadcrumb
              spacing="8px"
              separator={
                <div
                  style={{
                    width: '30px',
                    height: 0,
                    border: '1px solid #fff',
                    transform: 'rotate(90deg)',
                  }}
                  color="gray.500"
                />
              }
            >
              <BreadcrumbItem onClick={() => goUrl(item.file.url)}>
                <BreadcrumbLink
                  href="#"
                  _focus={{ boxShadow: 'none' }}
                  _hover={{ textDecoration: 'none' }}
                >
                  <HStack cursor="pointer">
                    <Icon as={FiEye} />
                    <Heading fontSize="14px" whiteSpace="nowrap">
                      Visualizar
                    </Heading>
                  </HStack>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem onClick={() => goUrl(item.file.url)}>
                <BreadcrumbLink
                  href="#"
                  _hover={{ textDecoration: 'none' }}
                  _focus={{ boxShadow: 'none' }}
                >
                  <HStack cursor="pointer">
                    <Icon as={FiDownload} />
                    <Heading fontSize="14px" whiteSpace="nowrap">
                      Baixar
                    </Heading>
                  </HStack>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
        </Box>
      ))}
    </>
  );
}
