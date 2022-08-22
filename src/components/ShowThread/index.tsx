import React from 'react';

import Avatar from '../Avatar';
import {AvatarSize} from '../Avatar/types';

import {AvatarContainer, ClickableArea, Container, Text} from './styles';

const ShowThread: React.FC = () => {
  // TODO: dinamizar e criar história
  return (
    <Container>
      <AvatarContainer>
        <Avatar
          size={AvatarSize.SMALL}
          source={{
            uri: 'https://github.com/raulburigo.png',
          }}
        />
      </AvatarContainer>
      <ClickableArea>
        <Text>Show this thread</Text>
      </ClickableArea>
    </Container>
  );
};

export default ShowThread;
