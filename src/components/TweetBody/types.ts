import {Tweet} from '../../types/tweet';

interface ITweetBodyProps {
  data: Omit<Tweet, 'comments'>; // TODO: usar somente o necessário
  isThread?: boolean;
  withComment?: boolean;
}

export type InfoAndContentContainerProps = Pick<ITweetBodyProps, 'withComment'>;

export type {ITweetBodyProps};
