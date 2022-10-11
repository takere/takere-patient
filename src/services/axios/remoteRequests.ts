import BoardDTO from '../../dto/board.dto';
import axiosInstance from './axios';

export class Requests {
  
  async getBoards(email: string): Promise<BoardDTO[]> {
    const response = await axiosInstance.get('board/me?email=' + email);
    const boards: BoardDTO[] = response.data;

    return boards;
  }

  async postBoardResponse(boardId: string, answers?: any) {
    const response = await axiosInstance.post('board/resolve', {
      boardId,
      answers,
    });
    return response.data;
  }

  async makeLogin(email: string, password: string) {
    const response = await axiosInstance.post('users/login', {email, password});
    return response.data;
  }

  async getAgenda(email: string) {
    const todayResponse = await axiosInstance.get('agenda/today?email=' + email);
    const tomorrowResponse = await axiosInstance.get('agenda/tomorrow?email=' + email);
    const todayData = todayResponse.data;
    const tomorrowData = tomorrowResponse.data;

    return {
      today: todayData,
      tomorrow: tomorrowData
    }
  }

  async getMyProgress(email: string) {
    const response = await axiosInstance.get('progress?email=' + email);
    const progressItems = response.data;

    return progressItems
  }
}
