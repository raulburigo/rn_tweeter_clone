import React, {PropsWithChildren} from 'react';

import {CenteredView} from './styles';

const CenterView: React.FC<PropsWithChildren> = ({children}) => {
  return <CenteredView>{children}</CenteredView>;
};

export {CenterView};
