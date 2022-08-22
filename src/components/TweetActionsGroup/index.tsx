import React from 'react';

import TweetAction from '../TweetAction';
import {ActionType} from '../TweetAction/types';
import {Container} from './styles';
import {ITweetActionsGroupProps} from './types';

const TweetActionsGroup: React.FC<ITweetActionsGroupProps> = ({
  tweetId,
  interactions,
}) => {
  return (
    <Container>
      <TweetAction
        tweetId={tweetId}
        type={ActionType.COMMENT}
        counter={interactions.comments}
      />
      <TweetAction
        tweetId={tweetId}
        type={ActionType.RETWEET}
        counter={interactions.retweets}
        interacted={interactions.retweetedByYou}
      />
      <TweetAction
        tweetId={tweetId}
        type={ActionType.LIKE}
        counter={interactions.likes}
        interacted={interactions.likedByYou}
      />
      <TweetAction
        tweetId={tweetId}
        type={ActionType.SHARE}
        showCounter={false}
      />
    </Container>
  );
};

export default TweetActionsGroup;
