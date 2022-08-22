import React, {
  createContext,
  useContext,
  PropsWithChildren,
  useCallback,
  useState,
} from 'react';
import {useTheme} from 'styled-components/native';

import {
  ITweetActionContextData,
  ITweetActionProps,
  ActionType,
  IActionIconProps,
} from './types';

const TweetActionContext = createContext({} as ITweetActionContextData);

const TweetActionProvider: React.FC<PropsWithChildren<ITweetActionProps>> = ({
  children,
  interacted,
  counter,
  type,
  ...props
}) => {
  const theme = useTheme();
  const [_interacted, setInteracted] = useState(interacted);
  const [_counter, setCounter] = useState<number>(counter ?? 0);

  const toggleInteraction = useCallback(() => {
    // se der boa...
    setCounter(_counter + (!_interacted ? 1 : -1));
    setInteracted(!_interacted);
  }, [_interacted, _counter]);

  const actionIconPropsMap: {
    [keys in ActionType]: IActionIconProps;
  } = {
    COMMENT: {
      name: 'comment-outline',
      onPress: () => console.log('abrir form de criar tweet de resposta'),
    },
    RETWEET: {
      name: 'retweet',
      color: _interacted ? theme.COMMOM.ACCENT_TERTIARY : undefined,
      onPress: () =>
        console.log(
          'abrir sheet para escolher se vai retweetar direto ou com comentário',
        ),
    },
    LIKE: {
      name: _interacted ? 'heart' : 'heart-outline',
      color: _interacted ? theme.COMMOM.ACCENT_SECONDARY : undefined,
      onPress: toggleInteraction,
    },
    SHARE: {
      name: 'share',
      onPress: () =>
        console.log('abrir sheet para escolher forma de compartilhamento'),
    },
  };

  return (
    <TweetActionContext.Provider
      value={{
        ...props,
        counter: _counter,
        actionIconProps: actionIconPropsMap[type],
      }}>
      {children}
    </TweetActionContext.Provider>
  );
};

const useTweetAction = (): ITweetActionContextData => {
  const context = useContext(TweetActionContext);

  if (!context) {
    throw new Error('useTweetAction must be used within a TweetActionProvider');
  }

  return context;
};

export {TweetActionProvider, useTweetAction};
