import React from 'react';
import {AvatarSize, IAvatarProps} from './types';
import {ContainerImage, AvatarImage} from './styles';

const Avatar: React.FC<IAvatarProps> = ({
  style: _,
  size = AvatarSize.MEDIUM,
  ...props
}) => {
  return (
    <ContainerImage {...props} size={size}>
      <AvatarImage {...props} size={size} />
    </ContainerImage>
  );
};

export default Avatar;
