import {User} from '../../types/user';

interface ITweetInfoProps {
  user: User;
  dateTime?: string;
}

interface ITextProps {
  secondary?: boolean;
  px?: number;
}

export type {ITweetInfoProps, ITextProps};
