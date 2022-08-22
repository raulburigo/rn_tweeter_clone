interface IBottomSheetProps {
  isOpen: boolean;
  onClose?: () => void;
}

interface IBottomSheetContextData extends IBottomSheetProps {}

export type {IBottomSheetContextData, IBottomSheetProps};
