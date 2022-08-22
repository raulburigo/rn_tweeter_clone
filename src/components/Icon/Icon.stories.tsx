import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Icon from './index';
import {CenterView} from '../../../storybook/decorators';
import {color, number, select} from '@storybook/addon-knobs';
import {iconPaths} from '../Icon/svgPaths';
import colors from '../../theme/colors';

storiesOf('Design System/Atoms/Icon', module).add('default', () => (
  <CenterView>
    <Icon
      color={color('color', colors.ACCENT)}
      // @ts-ignore
      name={select(
        'icon',
        Object.keys(iconPaths).sort((a, b) => a.localeCompare(b)),
        'bird',
      )}
      size={number('size', 30, {
        min: 2,
        max: 50,
        step: 2,
      })}
    />
  </CenterView>
));
