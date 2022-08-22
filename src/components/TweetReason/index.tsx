import React from 'react';
import {useTheme} from 'styled-components/native';
import Icon from '../Icon';
import {IconType} from '../Icon/types';
import {Container, IconContainer, ReasonText, TextContainer} from './styles';
import {ITweetReasonProps, TweetReasons} from './types';

const TweetReason: React.FC<ITweetReasonProps> = ({
  tweetReason: {reason, users},
}) => {
  const theme = useTheme();

  const iconMap: {[keys in TweetReasons]: IconType} = {
    LIKED_BY: 'heart',
    FOLLOWED_BY: 'person',
    RETWEETED_BY: 'retweet-bold',
    ANSWERED_BY: 'comment',
  };

  const textMap: {[keys in TweetReasons]: string[]} = {
    LIKED_BY: [' curtiu', ' curtiram'],
    FOLLOWED_BY: [' segue', ' seguem'],
    RETWEETED_BY: [' retweetou', ' retweetaram'],
    ANSWERED_BY: [' respondeu', ' responderam'],
  };

  return (
    <Container>
      <IconContainer>
        <Icon
          name={iconMap[reason]}
          color={theme.TWEET.SECONDARY} // TODO: check color
          size={16}
        />
      </IconContainer>
      <TextContainer>
        <ReasonText>
          {users[0].name}
          {users.length === 2 && (
            <ReasonText>{` e ${users[1].name}`}</ReasonText>
          )}
          {users.length > 2 && (
            <ReasonText>{` e outros ${users.length - 1}`}</ReasonText>
          )}
          <ReasonText>{textMap[reason][users.length === 1 ? 0 : 1]}</ReasonText>
        </ReasonText>
      </TextContainer>
    </Container>
  );
};

export default TweetReason;
