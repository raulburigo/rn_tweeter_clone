import styled from 'styled-components/native';

const CenteredView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.COMMOM.BACKGROUND};
  padding: 16px;
`;

const CenteredViewWithoutPadding = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.COMMOM.BACKGROUND};
`;

export {CenteredView, CenteredViewWithoutPadding};
