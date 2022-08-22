import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Avatar from './index';
import {CenterView} from '../../../storybook/decorators';
import {select, text} from '@storybook/addon-knobs';
import {AvatarSize} from './types';

storiesOf('Design System/Atoms/Avatar', module).add('default', () => (
  <CenterView>
    <Avatar
      source={{
        uri: `https://github.com/${text('github login', 'ElonMusk')}.png`,
      }}
      size={select('size', Object.values(AvatarSize), AvatarSize.MEDIUM)}
    />
  </CenterView>
));
