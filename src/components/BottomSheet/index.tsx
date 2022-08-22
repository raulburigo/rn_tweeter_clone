import React, {PropsWithChildren, useEffect, useState} from 'react';
import {Modal, TouchableOpacity} from 'react-native';
import {BottomSheetProvider, useBottomSheet} from './context';
import {Container} from './styles';
import {IBottomSheetProps} from './types';

const BottomSheetComponent: React.FC<PropsWithChildren> = ({children}) => {
  const {isOpen, onClose} = useBottomSheet();

  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    console.log('nada?');
    setVisible(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setVisible(false);
    onClose && onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableOpacity
        style={{
          flexGrow: 1,
        }}
        onPress={handleClose}>
        <Container>{children}</Container>
      </TouchableOpacity>
    </Modal>
  );
};

const BottomSheet: React.FC<PropsWithChildren<IBottomSheetProps>> = ({
  children,
  ...props
}) => {
  return (
    <BottomSheetProvider {...props}>
      <BottomSheetComponent>{children}</BottomSheetComponent>
    </BottomSheetProvider>
  );
};

export default BottomSheet;
