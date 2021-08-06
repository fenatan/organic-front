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

export default function Header() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <Box color="gray.50" bg="black.100" px={20}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack alignItems={'center'}>
            <Logo />
          </HStack>
          <Container maxW="lg">
            <Input placeholder="Pesquisar artigo" />
          </Container>

          {!isLogged ? (
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
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
      </Box>
    </>
  );
}
