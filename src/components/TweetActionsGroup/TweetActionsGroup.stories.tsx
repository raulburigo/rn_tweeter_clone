import React from 'react';
import {storiesOf} from '@storybook/react-native';

import TweetActionsGroup from './index';
import {CenterView} from '../../../storybook/decorators';
import {tweet1} from '../../mocks/tweets';
import {boolean, number} from '@storybook/addon-knobs';

storiesOf('Tweet/TweetActionsGroup', module).add('default', () => {
  const tweet = tweet1;
  tweet.interactions.likedByYou = boolean('like', false);
  tweet.interactions.retweetedByYou = boolean('retweeted', false);
  tweet.interactions.retweets = number('retweets', 9000, {min: 0});
  tweet.interactions.likes = number('likes', 20400, {min: 0});
  tweet.interactions.comments = number('comments', 183280, {min: 0});

  return (
    <CenterView>
      <TweetActionsGroup tweetId={tweet.id} interactions={tweet.interactions} />
    </CenterView>
  );
});
