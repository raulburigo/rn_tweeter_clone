import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  margin-top: -4px;
  margin-bottom: 4px;
`;

export const IconContainer = styled.View`
  justify-content: center;
  align-items: flex-end;
  margin-right: 12px;
  width: 44px;
`;

export const TextContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const ReasonText = styled.Text`
  color: ${({theme}) => theme.TWEET.SECONDARY};
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
`;
