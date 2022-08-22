import React from 'react';
import {Text} from './styles';
import {ITweetContentProps} from './types';

const TweetContent: React.FC<ITweetContentProps> = ({text}) => {
  return <Text>{text}</Text>;
};

export default TweetContent;
