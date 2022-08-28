import IBottomDrawer from "./IBottomDrawer";
import ICard from "./ICard";

interface IDataHandler extends Omit<IBottomDrawer, 'board'> {
  data: Omit<ICard, 'onOpen'>;
}

export default IDataHandler;
