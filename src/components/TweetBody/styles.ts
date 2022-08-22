import styled from 'styled-components/native';
import {InfoAndContentContainerProps} from './types';

export const Container = styled.View`
  flex-direction: row;
`;

export const AvatarContainer = styled.View`
  margin-right: 12px;
`;

export const ThreadLine = styled.View`
  width: 2px;
  flex: 1;
  margin: 0 auto;
  background-color: ${({theme}) => theme.TWEET.THREAD_LINE};
`;

export const InfoAndContentContainer = styled.View<InfoAndContentContainerProps>`
  flex: 1;
  padding-bottom: ${({withComment}) => (withComment ? 24 : 12)}px;
`;
