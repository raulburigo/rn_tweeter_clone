import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import Button from './index';
import {CenterView} from '../../../storybook/decorators';
import {boolean, select, text} from '@storybook/addon-knobs';
import {ButtonSize} from './types';
import {iconPaths} from '../Icon/svgPaths';

storiesOf('Design System/Atoms/Button', module)
  .add('default', () => (
    <CenterView>
      <Button
        onPress={action('tapped-default')}
        disabled={boolean('disabled', false)}>
        {text('buttonText', 'Tweet')}
      </Button>
    </CenterView>
  ))
  .add('secondary', () => (
    <CenterView>
      <Button
        onPress={action('tapped-default')}
        secondary={boolean('secondary', true, 'teste 1')}
        disabled={boolean('disabled', false, 'teste 1')}>
        {text('buttonText', 'Follow')}
      </Button>
    </CenterView>
  ))
  .add('google', () => (
    <CenterView>
      <Button
        onPress={action('tapped-default')}
        secondary
        iconName={'google'}
        size={ButtonSize.LARGE}>
        Inscrever-se com Google
      </Button>
    </CenterView>
  ))
  .add('complete', () => (
    <CenterView>
      <Button
        onPress={action('tapped-default')}
        secondary
        // @ts-ignore
        iconName={select(
          'icon',
          Object.keys(iconPaths).sort((a, b) => a.localeCompare(b)),
          undefined,
        )}
        outline={boolean('outline', true)}
        disabled={boolean('disabled', false)}
        size={select('size', Object.values(ButtonSize), ButtonSize.MEDIUM)}>
        {text('buttonText', 'Cancel')}
      </Button>
    </CenterView>
  ));
