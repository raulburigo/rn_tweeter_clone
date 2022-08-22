import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {IconContainer} from './styles';
import {iconPaths} from './svgPaths';
import {IIconProps} from './types';

const Icon: React.FC<IIconProps> = ({
  color,
  size = 12,
  name,
  onPress,
  disabled,
}) => {
  const paths: string[] = iconPaths[name];

  const googleColors = ['#ea4335', '#4285f4', '#fbbc05', '#34a853', 'none'];
  return (
    <IconContainer
      size={size}
      disabled={disabled || !onPress}
      onPress={onPress}>
      <Svg
        viewBox={name === 'google' ? '0 0 48 48' : '0 0 24 24'}
        height={size}
        width={size}>
        {paths.map((path, index) => (
          <Path
            key={index}
            d={path}
            fill={name !== 'google' ? color : googleColors[index]}
          />
        ))}
        {name === 'dots' && (
          <>
            <Circle cx={5} cy={12} r={2} fill={color} />
            <Circle cx={12} cy={12} r={2} fill={color} />
            <Circle cx={19} cy={12} r={2} fill={color} />
          </>
        )}
      </Svg>
    </IconContainer>
  );
};

export default Icon;
