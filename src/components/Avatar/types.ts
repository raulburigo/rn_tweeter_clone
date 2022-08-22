import {ImageProps, TouchableOpacityProps} from 'react-native';

export enum AvatarSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  EXTRA_LARGE = 'EXTRA_LARGE',
}

interface IAvatarProps
  extends Omit<ImageProps, 'style'>,
    TouchableOpacityProps {
  size?: AvatarSize;
}

interface IAvatarImageProps extends Required<IAvatarProps> {}

interface IAvatarContainerProps
  extends Omit<Required<IAvatarProps>, 'source'> {}

export type {IAvatarProps, IAvatarImageProps, IAvatarContainerProps};
