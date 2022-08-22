import React from 'react';
import Avatar from '../Avatar';
import TweetActionsGroup from '../TweetActionsGroup';
import TweetContent from '../TweetContent';
import TweetInfo from '../TweetInfo';
import {
  AvatarContainer,
  Container,
  InfoAndContentContainer,
  ThreadLine,
} from './styles';
import {ITweetBodyProps} from './types';

const TweetBody: React.FC<ITweetBodyProps> = ({
  isThread,
  withComment,
  data,
}) => {
  return (
    <Container>
      <AvatarContainer>
        <Avatar
          source={{
            uri: data.user.avatar,
          }}
        />
        {(isThread || withComment) && <ThreadLine />}
      </AvatarContainer>
      <InfoAndContentContainer withComment={withComment}>
        <TweetInfo user={data.user} dateTime={data.date} />
        <TweetContent text={data.content} />
        <TweetActionsGroup interactions={data.interactions} tweetId={data.id} />
      </InfoAndContentContainer>
    </Container>
  );
};

export default TweetBody;
