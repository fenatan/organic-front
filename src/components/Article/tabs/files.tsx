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

export default function Files() {
  return (
    <>
      <Heading mb={14}>Título</Heading>
      {[1, 2, 3, 4].map((i) => (
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
              Title
            </Heading>
            <Heading fontSize="16px" fontWeight="normal">
              Nome e sobrenome, data, formato
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
              <BreadcrumbItem>
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

              <BreadcrumbItem>
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
