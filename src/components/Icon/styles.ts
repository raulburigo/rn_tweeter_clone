import styled from 'styled-components/native';
import {IIconContainerProps} from './types';

export const IconContainer = styled.TouchableOpacity<IIconContainerProps>`
  border-radius: ${({size}) => size / 2}px;
`;
