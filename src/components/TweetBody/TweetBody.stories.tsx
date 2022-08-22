import React from 'react';
import {storiesOf} from '@storybook/react-native';

import TweetBody from './index';
import {CenterView} from '../../../storybook/decorators';
import {tweet1} from '../../mocks/tweets';
import {boolean, number} from '@storybook/addon-knobs';

storiesOf('Tweet/TweetBody', module).add('default', () => {
  const tweet = tweet1;
  tweet.interactions.likedByYou = boolean('like', false);
  tweet.interactions.retweets = number('retweets', 0, {min: 0});
  tweet.interactions.likes = number('likes', 0, {min: 0});
  tweet.interactions.comments = number('comments', 0, {min: 0});

  return (
    <CenterView>
      <TweetBody data={tweet} />
    </CenterView>
  );
});
