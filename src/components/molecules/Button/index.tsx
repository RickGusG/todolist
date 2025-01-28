import { Box, Text } from '../../atoms';
import { Touchable } from './styles';

type ButtonProps = {
  onPress: () => void
  label: string
  color?: string
  textColor?: string
  marginTop?: number
  marginBottom?: number
  width?: string
}

const Button = ({onPress, label, textColor, color, marginBottom, marginTop, width}: ButtonProps) => {
  return (
    <Touchable width={width} marginBottom={marginBottom} marginTop={marginTop} onPress={onPress}>
      <Box height={50} alignItems="center" justifyContent="center" backgroundColor={color || 'limegreen'} borderRadius={8} padding={8}>
        <Text color={textColor || 'white'} fontWeight={'bold'} label={label}/>
      </Box>
    </Touchable>
  );
};

export default Button;
