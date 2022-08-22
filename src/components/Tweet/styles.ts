import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 12px 16px 0px 16px;
  border-bottom-color: ${({theme}) => theme.TWEET.BORDER};
  border-bottom-style: solid;
  border-bottom-width: 1px;
`;
