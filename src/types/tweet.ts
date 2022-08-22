import {ITweetReason} from '../components/TweetReason/types';
import {User} from './user';

interface TweetInteractions {
  likes: number;
  retweets: number;
  comments: number;
  likedByYou: boolean;
  retweetedByYou: boolean;
}
interface Tweet {
  id: string;
  user: User;
  reason: ITweetReason | null;
  content: string;
  date: string; // ou date?
  interactions: TweetInteractions;
  isThread: boolean;
  media: {
    type: string;
    uri: string;
  } | null;
  comments: Omit<Tweet, 'comments'>[];
}

export type {Tweet, TweetInteractions};
