import styled from 'styled-components/native';

export const P = styled.Text`
  transition: ease 0.3s;
  ${({color}: {color: string}) => color && `color: ${color};`}
  ${({fontSize}: {fontSize: number}) => fontSize && `font-size: ${fontSize}px;`}
  ${({fontWeight}: {fontWeight: string}) => fontWeight && `font-weight: ${fontWeight};`}
  ${({textAlign}: {textAlign: string}) => textAlign && `text-align: ${textAlign};`}
  ${({fontFamily}: {fontFamily: string}) => fontFamily && `font-family: ${fontFamily};`}
  ${({textDecoration}: {textDecoration: string}) => textDecoration && `text-decoration: ${textDecoration};`}

`;
