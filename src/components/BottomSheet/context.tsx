import React, {createContext, useContext, PropsWithChildren} from 'react';

import {IBottomSheetContextData, IBottomSheetProps} from './types';

const BottomSheetContext = createContext({} as IBottomSheetContextData);

const BottomSheetProvider: React.FC<PropsWithChildren<IBottomSheetProps>> = ({
  children,
  ...props
}) => {
  return (
    <BottomSheetContext.Provider
      value={{
        ...props,
      }}>
      {children}
    </BottomSheetContext.Provider>
  );
};

const useBottomSheet = (): IBottomSheetContextData => {
  const context = useContext(BottomSheetContext);

  if (!context) {
    throw new Error('useBottomSheet must be used within a BottomSheetProvider');
  }

  return context;
};

export {BottomSheetProvider, useBottomSheet};
