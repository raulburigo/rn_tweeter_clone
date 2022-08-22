import styled from 'styled-components/native';
import {ITextProps} from './types';

export const Container = styled.View`
  width: 100%;
  padding-bottom: 2px;
  margin-bottom: auto;
  flex-direction: row;
`;

export const NameContainer = styled.View`
  flex-shrink: 1;
`;

export const VerifiedBadgeContainer = styled.View`
  justify-content: center;
  margin-left: 2px;
  align-items: center;
`;

export const UsernameContainer = styled.View`
  flex-shrink: 1;
  margin-left: 4px;
`;

export const Text = styled.Text.attrs({numberOfLines: 1})<ITextProps>`
  color: ${({theme, secondary}) =>
    secondary ? theme.TWEET.SECONDARY : theme.TWEET.PRIMARY};
  font-size: 15px;
  line-height: 20px;
  font-weight: 700;
  padding: 0 ${({px}) => px ?? 0}px;
`;
