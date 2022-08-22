// TODO: trazer tipagem do back

import {userRaul} from '../../mocks/users';

export enum TweetReasons {
  LIKED_BY = 'LIKED_BY',
  FOLLOWED_BY = 'FOLLOWED_BY',
  RETWEETED_BY = 'RETWEETED_BY',
  ANSWERED_BY = 'ANSWERED_BY',
}

interface ITweetReason {
  reason: TweetReasons;
  users: typeof userRaul[];
}

interface ITweetReasonProps {
  tweetReason: ITweetReason;
}

export type {ITweetReason, ITweetReasonProps};
