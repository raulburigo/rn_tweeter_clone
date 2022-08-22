import React from 'react';
import {storiesOf} from '@storybook/react-native';

import TweetInfo from './index';
import {CenterView} from '../../../storybook/decorators';
import {userRaul} from '../../mocks/users';
// import {tweet1} from '../../mocks/tweets';
// import {boolean, number} from '@storybook/addon-knobs';

storiesOf('Tweet/TweetInfo', module).add('default', () => {
  return (
    <CenterView>
      <TweetInfo user={userRaul} dateTime={'2022-08-16 16:00:00'} />
    </CenterView>
  );
});
