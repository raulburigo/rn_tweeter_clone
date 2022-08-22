import {PropsWithChildren} from 'react';
import {TouchableOpacityProps} from 'react-native';
import {IconType} from '../Icon/types';

export enum ButtonSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  EXTRA_LARGE = 'EXTRA_LARGE',
}

interface IButtonStyleProps {
  secondary?: boolean;
  outline?: boolean;
  iconName?: IconType;
  size?: ButtonSize;
}

interface IButtonProps
  extends PropsWithChildren<TouchableOpacityProps>,
    IButtonStyleProps {}

export type {IButtonProps, IButtonStyleProps};
