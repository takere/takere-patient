import ICard from "./ICard";

interface IBottomDrawer {
  board: Omit<ICard, 'onOpen'>;
  onUpdateData: () => void;
}

export default IBottomDrawer;
