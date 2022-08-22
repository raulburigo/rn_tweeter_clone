import React from 'react';

import Tweet from '../../components/Tweet';
import {tweet1, tweet2, tweet3} from '../../mocks/tweets';
import {Container, TimeLine} from './styles';

const Feed: React.FC = () => {
  const tweets = [tweet1, tweet2, tweet3];

  return (
    <Container>
      <TimeLine
        data={tweets}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Tweet data={item} />}
      />
    </Container>
  );
};

export default Feed;
