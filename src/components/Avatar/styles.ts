import styled from 'styled-components/native';
import {AvatarSize, IAvatarContainerProps, IAvatarImageProps} from './types';

const sizes: {[keys in AvatarSize]: number} = {
  SMALL: 32,
  MEDIUM: 40,
  LARGE: 48,
  EXTRA_LARGE: 87.5,
};

export const ContainerImage = styled.TouchableOpacity<IAvatarContainerProps>`
  width: ${props => sizes[props.size] + 4}px;
  height: ${props => sizes[props.size] + 4}px;
  border-radius: ${props => (sizes[props.size] + 4) / 2}px;
  justify-content: center;
  align-items: center;
  padding: 4px;
  background-color: ${({theme}) => theme.COMMOM.BACKGROUND};
`;

export const AvatarImage = styled.Image<IAvatarImageProps>`
  ${props => {
    const sizeInPx = sizes[props.size];

    return `width: ${sizeInPx}px;
      height: ${sizeInPx}px;
      border-radius: ${sizeInPx / 2}px;`;
  }}
`;
