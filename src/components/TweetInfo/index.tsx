import React from 'react';

import Icon from '../Icon';
import {
  Container,
  NameContainer,
  Text,
  UsernameContainer,
  VerifiedBadgeContainer,
} from './styles';

import {useTheme} from 'styled-components/native';
import formatTime from '../../utils/formatTime';
import {ITweetInfoProps} from './types';

const TweetInfo: React.FC<ITweetInfoProps> = ({user, dateTime}) => {
  const theme = useTheme();

  return (
    <Container>
      <NameContainer>
        <Text>{user.name}</Text>
      </NameContainer>
      {user.isVerified && (
        <VerifiedBadgeContainer>
          <Icon
            name={'verified'}
            color={theme.TWEET.VERIFIED_BADGE}
            size={18.75}
          />
        </VerifiedBadgeContainer>
      )}
      <UsernameContainer>
        <Text secondary>{`@${user.username}`}</Text>
      </UsernameContainer>
      {!!dateTime && (
        <>
          <Text secondary px={4}>
            -
          </Text>
          <Text secondary>{formatTime(dateTime)}</Text>
        </>
      )}
    </Container>
  );
};

export default TweetInfo;
