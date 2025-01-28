import { PropsWithChildren } from 'react';
import { P } from './styles';
import { TextStyle } from 'react-native';

const Text = ({children, label, ...props}: PropsWithChildren<TextStyle> & {label: string}) => {
  return <P {...props}>{label || children}</P>;
};

export default Text;
