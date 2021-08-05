import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export type InputProps = {
  placeholder?: string;
  type?: string;
  backgroundColor?: string;
  color?: string;
  size?: string;
};

export default function CustomInput({
  placeholder = '',
  type = 'text',
  backgroundColor = 'white.100',
  color = 'gray.300',
  size = 'md',
}: InputProps) {
  return (
    <InputGroup border="none" size={size}>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color={color} />
      </InputLeftElement>
      <Input
        isFullWidth={true}
        focusBorderColor="transparent"
        bg={backgroundColor}
        color={color}
        borderRadius="3xl"
        type={type}
        placeholder={placeholder}
      />
    </InputGroup>
  );
}
