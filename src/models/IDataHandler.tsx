import IBottomDrawer from "./IBottomDrawer";
import ICard from "./ICard";

interface IDataHandler extends Omit<IBottomDrawer, 'board'> {
  data: Pick<ICard, 'node'>;
}

export default IDataHandler;
