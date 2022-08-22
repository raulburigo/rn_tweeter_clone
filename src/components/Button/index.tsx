import React from 'react';

import {ButtonSize, IButtonProps} from './types';

import {Container, IconContainer, Text} from './styles';
import Icon from '../Icon';
import {useTheme} from 'styled-components/native';

const Button: React.FC<IButtonProps> = ({
  children,
  iconName,
  size = ButtonSize.MEDIUM,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Container {...props} size={size}>
      {iconName && (
        <IconContainer>
          <Icon
            name={iconName}
            color={
              !props.secondary
                ? theme.BUTTON.PRIMARY_TEXT
                : props.outline
                ? theme.BUTTON.SECONDARY_BACKGROUND
                : theme.BUTTON.SECONDARY_TEXT
            }
            size={20}
          />
        </IconContainer>
      )}
      {children && (
        <Text {...props} disabled size={size}>
          {children}
        </Text>
      )}
    </Container>
  );
};

export default Button;
