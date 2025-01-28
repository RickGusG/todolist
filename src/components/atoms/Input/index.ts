import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';

const Input = styled.TextInput<TextInputProps>`
  width: ${({ width }: { width: string }) => width || '100%'};
  height: 40px;
  padding: 8px;
  margin-top: 16px;
  border-radius: 8px;
  border-width: 1px;
  border-color: gray;
  background-color: white;
  ${({ error }: { error: boolean }) =>
    error &&
    `
    border-color: crimson;
  `}
`;

export default Input;
