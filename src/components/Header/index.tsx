import { useState } from 'react';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Container,
} from '@chakra-ui/react';

import Logo from 'components/Logo';
import Input from 'components/Input';
import AuthContext from 'contexts/auth';
import { useContext } from 'react';
import Router from 'next/router';

export default function Header() {
  const context = useContext(AuthContext);
  function goLogin() {
    Router.push('/login');
  }
  function handleClickLogo() {
    Router.push('/');
  }
  return (
    <>
      <Box color="gray.50">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack
            cursor="pointer"
            alignItems={'center'}
            onClick={handleClickLogo}
          >
            <Logo />
          </HStack>
          <Container maxW="lg">
            <Input placeholder="Pesquisar artigo" />
          </Container>

          {!context.signed ? (
            <Button
              size="sm"
              fontSize="14px"
              border="2px"
              px={6}
              py={2.5}
              borderRadius="3xl"
              borderColor="gray.50"
              color="gray.50"
              bg="transparent"
              _focus={{
                boxShadow: '',
              }}
              onClick={goLogin}
            >
              Entrar
            </Button>
          ) : (
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Flex alignItems="center">
                  <Avatar
                    size={'sm'}
                    src={
                      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                  />
                  <Box ml="10px" color="#FFF">
                    Olá, {context.user.username}
                  </Box>
                </Flex>
              </MenuButton>
              <MenuDivider />
              <MenuList>
                <MenuItem>Dados pessoais</MenuItem>
                <MenuItem>Meus artigos</MenuItem>
                <MenuItem>Artigos salvos</MenuItem>
                <MenuItem>Sair</MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
      </Box>
    </>
  );
}
