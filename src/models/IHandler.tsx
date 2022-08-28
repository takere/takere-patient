import IBottomDrawer from "./IBottomDrawer";
import ICard from "./ICard";

interface IHandler extends Omit<IBottomDrawer, 'board'> {
  data: Omit<ICard, 'onOpen'>;
}

export default IHandler;
