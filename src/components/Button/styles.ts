import styled, {css} from 'styled-components/native';

import {ButtonSize, IButtonProps, IButtonStyleProps} from './types';

const sizeMap: {[keys in ButtonSize]: any} = {
  SMALL: {
    minHeight: 32,
    minWidth: '32px',
    paddingHorizontal: 16,
    fontSize: 14,
    lineHeight: 16,
  },
  MEDIUM: {
    minHeight: 36,
    minWidth: '36px',
    paddingHorizontal: 16,
    fontSize: 15,
    lineHeight: 20,
  },
  LARGE: {
    minHeight: 44,
    minWidth: '100%',
    paddingHorizontal: 16,
    fontSize: 15,
    lineHeight: 20,
  },
  EXTRA_LARGE: {
    minHeight: 50,
    minWidth: '100%',
    paddingHorizontal: 32,
    fontSize: 17,
    lineHeight: 20,
  },
};

const IconContainer = styled.View`
  margin-right: 4px;
`;

const Container = styled.TouchableOpacity<IButtonProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  min-width: ${({size}) => sizeMap[size ?? 'MEDIUM'].minWidth};
  min-height: ${({size}) => sizeMap[size ?? 'MEDIUM'].minHeight}px;
  padding: 0 ${({size}) => sizeMap[size ?? 'MEDIUM'].paddingHorizontal}px;
  opacity: ${({disabled}) => (disabled ? 0.5 : 1)};
  background-color: ${({theme, secondary, outline}) => {
    if (!secondary) {
      return theme.BUTTON.PRIMARY_BACKGROUND;
    } else {
      return outline ? 'transparent' : theme.BUTTON.SECONDARY_BACKGROUND;
    }
  }};

  ${({outline, theme}) =>
    outline &&
    css`
      border: 1px solid ${theme.BUTTON.OUTLINE_BORDER};
    `}
`;

const Text = styled.Text<IButtonStyleProps>`
  font-size: ${({size}) => sizeMap[size ?? 'MEDIUM'].fontSize}px;
  line-height: ${({size}) => sizeMap[size ?? 'MEDIUM'].lineHeight}px;
  font-weight: 700;
  color: ${({theme, secondary, outline}) => {
    if (!secondary) {
      return theme.BUTTON.PRIMARY_TEXT;
    } else {
      return outline
        ? theme.BUTTON.SECONDARY_BACKGROUND
        : theme.BUTTON.SECONDARY_TEXT;
    }
  }};
`;

export {Container, Text, IconContainer};
