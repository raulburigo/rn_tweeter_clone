import React from 'react';
import {useTheme} from 'styled-components/native';
import formatNumber from '../../utils/formatNumber';
import Icon from '../Icon';
import {TweetActionProvider, useTweetAction} from './context';
import {ActionContainer, ActionCounterText} from './styles';
import {ITweetActionProps} from './types';

const TweetActionComponent = () => {
  const theme = useTheme();
  const {actionIconProps, counter, showCounter = true} = useTweetAction();

  return (
    <ActionContainer>
      <Icon
        onPress={actionIconProps.onPress}
        name={actionIconProps.name}
        color={actionIconProps.color ?? theme.TWEET.SECONDARY}
        size={18.75}
      />
      {showCounter && !!counter && counter > 0 && (
        <ActionCounterText color={actionIconProps.color}>
          {formatNumber(counter)}
        </ActionCounterText>
      )}
    </ActionContainer>
  );
};

const TweetAction: React.FC<ITweetActionProps> = props => {
  return (
    <TweetActionProvider {...props}>
      <TweetActionComponent />
    </TweetActionProvider>
  );
};
export default TweetAction;
