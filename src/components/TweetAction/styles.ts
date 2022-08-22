import styled from 'styled-components/native';
import {ITweetCounterProps} from './types';

export const ActionContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ActionCounterText = styled.Text<ITweetCounterProps>`
  color: ${({theme, color}) => color ?? theme.TWEET.SECONDARY};
  font-size: 13px;
  margin-left: 4px;
  line-height: 16px;
`;
