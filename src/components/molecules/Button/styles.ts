import styled from 'styled-components/native';

export const Touchable = styled.TouchableOpacity`
  width: ${({width}: {width: string}) => width || '48%'};
  height: 50px;
  ${({marginTop}: {marginTop: number}) => marginTop && `margin-top: ${marginTop}px;`}
  ${({marginBottom}: {marginBottom: number}) => marginBottom && `margin-bottom: ${marginBottom}px;`}
`;
