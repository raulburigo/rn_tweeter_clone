import React from 'react';
import {storiesOf} from '@storybook/react-native';

import TweetReason from './index';
import {CenterView} from '../../../storybook/decorators';
import {number, select} from '@storybook/addon-knobs';
import {TweetReasons} from './types';
import {userRaul, userEronaldo, userPedro} from '../../mocks/users';

storiesOf('Tweet/TweetReason', module).add('default', () => {
  const users = [
    userRaul,
    userEronaldo,
    userPedro,
    userPedro,
    userPedro,
    userPedro,
    userPedro,
    userPedro,
    userPedro,
    userPedro,
  ];

  return (
    <CenterView>
      <TweetReason
        tweetReason={{
          reason: select(
            'size',
            Object.values(TweetReasons),
            TweetReasons.LIKED_BY,
          ),
          users: users.splice(
            0,
            number('users length', 1, {
              min: 1,
              max: 10,
            }),
          ),
        }}
      />
    </CenterView>
  );
});
