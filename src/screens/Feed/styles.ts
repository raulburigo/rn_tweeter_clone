import {FlatList, FlatListProps} from 'react-native';
import styled from 'styled-components/native';
import {Tweet} from '../../types/tweet';

export const Container = styled.SafeAreaView`
  background-color: ${({theme}) => theme.COMMOM.BACKGROUND};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TimeLine = styled(
  FlatList as new (props: FlatListProps<Tweet>) => FlatList<Tweet>,
)`
  width: 100%;
`;
