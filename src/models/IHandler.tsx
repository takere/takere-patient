import IBottomDrawer from "./IBottomDrawer";
import ICard from "./ICard";

interface IHandler extends Omit<IBottomDrawer, 'board'> {
  data: Pick<ICard, 'node'>;
}

export default IHandler;
