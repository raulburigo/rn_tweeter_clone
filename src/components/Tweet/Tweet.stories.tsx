import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Tweet from './index';
import {tweet1, tweet2, tweet3} from '../../mocks/tweets';
import {CenteredViewWithoutPadding} from '../../../storybook/styles';
import {boolean, number} from '@storybook/addon-knobs';

storiesOf('Tweet/Tweet', module)
  .add('default', () => {
    const tweet = tweet2;

    tweet.interactions.likedByYou = boolean('like', false);
    tweet.interactions.retweetedByYou = boolean('retweet', false);
    tweet.interactions.retweets = number('retweets', 0, {min: 0});
    tweet.interactions.likes = number('likes', 0, {min: 0});
    tweet.interactions.comments = number('comments', 0, {min: 0});

    return (
      <CenteredViewWithoutPadding>
        <Tweet data={tweet} />
      </CenteredViewWithoutPadding>
    );
  })
  .add('thread', () => {
    const tweet = tweet1;

    return (
      <CenteredViewWithoutPadding>
        <Tweet data={tweet} />
      </CenteredViewWithoutPadding>
    );
  })
  .add('with comment', () => {
    const tweet = tweet3;

    return (
      <CenteredViewWithoutPadding>
        <Tweet data={tweet} />
      </CenteredViewWithoutPadding>
    );
  });
