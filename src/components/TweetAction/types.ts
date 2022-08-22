import {IconType} from '../Icon/types';

export enum ActionType {
  COMMENT = 'COMMENT',
  RETWEET = 'RETWEET',
  LIKE = 'LIKE',
  SHARE = 'SHARE',
}

interface IActionIconProps {
  name: IconType;
  color?: string;
  onPress?: () => void;
}

interface ITweetCounterProps {
  color?: string;
}

interface ITweetActionProps {
  type: ActionType;
  counter?: number;
  showCounter?: boolean;
  interacted?: boolean;
  tweetId: string;
}

interface ITweetActionContextData extends Omit<ITweetActionProps, 'type'> {
  actionIconProps: IActionIconProps;
}

export type {
  IActionIconProps,
  ITweetCounterProps,
  ITweetActionProps,
  ITweetActionContextData,
};
