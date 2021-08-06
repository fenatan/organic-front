import React, { createContext, useState } from 'react';
import { login, me, UserDto } from 'services/account';

interface AuthContextData {
  signed: boolean;
  Login(email: string, password: string): Promise<void>;
  user: UserDto | null;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserDto | null>(null);
  async function Login(email: string, password: string) {
    const token = await login(email, password);
    localStorage.setItem('token', token);
    const user = await me();
    setUser(user);
  }
  return (
    <AuthContext.Provider value={{ signed: Boolean(user), Login, user }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
