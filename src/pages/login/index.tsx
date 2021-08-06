import {
  Heading,
  Box,
  Input,
  FormControl,
  FormLabel,
  Button,
} from '@chakra-ui/react';
import AuthContext from 'contexts/auth';
import { useContext, useState } from 'react';

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
    await context.Login(user.email, user.password);
  }

  return (
    <>
      <Box bg="primary.100" w="100%" p={4} color="white">
        <Heading size="lg">Login</Heading>
      </Box>
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
      <Button onClick={handleLogin} colorScheme="green">
        Entrar
      </Button>
    </>
  );
}
