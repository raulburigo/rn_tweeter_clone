import {TouchableOpacityProps} from 'react-native';
import {iconPaths} from './svgPaths';

type IconType = keyof typeof iconPaths;

interface IIconProps extends TouchableOpacityProps {
  name: IconType;
  color?: string;
  size?: number;
}

interface IIconContainerProps {
  size: number;
}

export type {IIconProps, IconType, IIconContainerProps};
