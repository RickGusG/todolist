import { ViewStyle } from 'react-native';
import styled from 'styled-components/native';

const Box = styled.View<ViewStyle>`
  ${({flex}: {flex: number}) => flex && `flex: ${flex};`}
  ${({justifyContent}: {justifyContent: string}) => justifyContent && `justify-content: ${justifyContent};`}
  ${({alignItems}: {alignItems: string}) => alignItems && `align-items: ${alignItems};`}
  ${({flexDirection}: {flexDirection: string}) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({backgroundColor}: {backgroundColor: string}) => backgroundColor && `background-color: ${backgroundColor};`}
  ${({padding}: {padding: number}) => padding && `padding: ${padding}px;`}
  ${({margin}: {margin: number}) => margin && `margin: ${margin}px;`}
  ${({borderRadius}: {borderRadius: number}) => borderRadius && `border-radius: ${borderRadius}px;`}
  ${({width}: {width: string}) => width && `width: ${width}`}
  ${({height}: {height: number}) => height && `height: ${height}px;`}
  ${({position}: {position: string}) => position && `position: ${position};`}
  ${({top}: {top: number}) => top && `top: ${top}px;`}
  ${({left}: {left: number}) => left && `left: ${left}px;`}
  ${({right}: {right: number}) => right && `right: ${right}px;`}
  ${({bottom}: {bottom: number}) => bottom && `bottom: ${bottom}px;`}
  ${({shadowColor}: {shadowColor: string}) => shadowColor && `shadow-color: ${shadowColor};`}
  ${({shadowOffset}: {shadowOffset: {width: number, height: number}}) => shadowOffset && `shadow-offset: ${shadowOffset.width}px ${shadowOffset.height}px;`}
  ${({shadowOpacity}: {shadowOpacity: number}) => shadowOpacity && `shadow-opacity: ${shadowOpacity};`}
  ${({shadowRadius}: {shadowRadius: number}) => shadowRadius && `shadow-radius: ${shadowRadius}px;`}
  ${({elevation}: {elevation: number}) => elevation && `elevation: ${elevation};`}
  ${({borderWidth}: {borderWidth: number}) => borderWidth && `border-width: ${borderWidth}px;`}
  ${({borderColor}: {borderColor: string}) => borderColor && `border-color: ${borderColor};`}
  ${({zIndex}: {zIndex: number}) => zIndex && `z-index: ${zIndex};`}
`;

export default Box;
