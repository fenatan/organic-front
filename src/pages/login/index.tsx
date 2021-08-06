import {
  Heading,
  Box,
  Input,
  FormControl,
  FormLabel,
  Button,
} from '@chakra-ui/react';
import Header from 'components/Header';
import AuthContext from 'contexts/auth';
import { useContext, useState } from 'react';
import Router from 'next/router';

export default function Login() {
  const [user, setUser] = useState({ email: '', password: '' });

  const context = useContext(AuthContext);

  function onChange({ target }) {
    const newValue = target.value;
    const inputName = target.name;
    setUser((prevState) => {
      return {
        ...prevState,
        [inputName]: newValue,
      };
    });
  }

  async function handleLogin() {
    if (localStorage && localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
    await context.Login(user.email, user.password);
    Router.push('/');
  }

  return (
    <>
      <Box minH="100vh" bg="black.100" color="gray.50" px={20}>
        <Header />
        <Box maxWidth="900px" margin="30px auto">
          <Heading mb={5} mt={4} textAlign="center">
            Bem-vindo, faça já seu login.
          </Heading>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              onChange={onChange}
              value={user.email}
              type="email"
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Senha</FormLabel>
            <Input
              name="password"
              onChange={onChange}
              value={user.password}
              type="password"
            />
          </FormControl>
          <Button
            mt={6}
            size="sm"
            fontSize="14px"
            w="100%"
            h="40px"
            borderRadius="3xl"
            border="none"
            color="black.100"
            bg="primary.100"
            onClick={handleLogin}
            _focus={{
              boxShadow: '',
            }}
            _hover={{
              opacity: '0.8',
            }}
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </>
  );
}
