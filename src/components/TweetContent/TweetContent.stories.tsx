import React from 'react';
import {storiesOf} from '@storybook/react-native';

import TweetContent from './index';
import {CenterView} from '../../../storybook/decorators';
import {text} from '@storybook/addon-knobs';

storiesOf('Tweet/TweetContent', module).add('default', () => {
  return (
    <CenterView>
      <TweetContent
        text={text(
          'tweet text',
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. A assumenda minus odio veritatis exercitationem enim tenetur nemo velit nihil. Iusto!',
        )}
      />
    </CenterView>
  );
});
