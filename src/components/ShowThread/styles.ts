import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
`;

export const AvatarContainer = styled.View`
  width: 44px;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  padding: 4px 0;
`;

export const ClickableArea = styled.TouchableOpacity`
  margin: 8px 0;
`;

export const Text = styled.Text`
  font-size: 15px;
  line-height: 20px;
  color: ${({theme}) => theme.COMMOM.ACCENT};
`;
