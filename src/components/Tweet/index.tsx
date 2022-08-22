import React from 'react';
import ShowThread from '../ShowThread';
import TweetBody from '../TweetBody';
import TweetReason from '../TweetReason';
import {Container} from './styles';
import {ITweetProps} from './types';

const Tweet: React.FC<ITweetProps> = ({data}) => {
  return (
    <Container>
      {!!data.reason && (
        <TweetReason
          tweetReason={{
            reason: data.reason.reason,
            users: data.reason.users,
          }}
        />
      )}
      <TweetBody
        withComment={data.comments.length > 0}
        isThread={data.isThread}
        data={data}
      />
      {data.isThread && <ShowThread />}
      {data.comments.length > 0 && <TweetBody data={data.comments[0]} />}
    </Container>
  );
};

export default Tweet;
