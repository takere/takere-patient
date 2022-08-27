import BoardDTO from '../../dto/board.dto';
import axiosInstance from './axios';

export class Requests {
  // async getMe() {
  //   try {
  //     const response = await axiosInstance.get('users/me');
  //     return response.data;
  //   } catch (e) {
  //   }
  // }

  async getBoards(email: string): Promise<BoardDTO[]> {
    //const response = await axiosInstance.get('board/me', {params: {email}});
    const response = await axiosInstance.get('board/me?email=' + email);
    const boards: BoardDTO[] = response.data;

    boards.forEach(board => {
      board.node.type = this.formatNodeType(board.node.type)
    });

    return boards;
  }

  private formatNodeType(type: string): string {
    let formattedType = type;

    formattedType = formattedType.replace("_NODE", "");
    formattedType = this.convertSnakeToCapitalizedString(formattedType);

    return formattedType;
  }

  private convertSnakeToCapitalizedString(str: string): string {
    const terms: string[] = [];

    str.split('_').forEach(term => {
      terms.push(this.capitalize(term));
    })

    return terms.join(' ');
  }

  private capitalize(str: string): string {
    if (str.length <= 1) {
      return str.toUpperCase();
    }

    let firstCharacter = str.charAt(0);
    let remainingCharacters = str.substring(1);

    return firstCharacter.toUpperCase() + remainingCharacters.toLowerCase();
  }

  async postBoardResponse(boardId: string, result?: string) {
    const response = await axiosInstance.post('board/resolve', {
      boardId,
      result,
    });
    return response.data;
  }

  async makeLogin(email: string, password: string) {
    const response = await axiosInstance.post('users/login', {email, password});
    return response.data;
  }
}
