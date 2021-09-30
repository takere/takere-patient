import axiosInstance from './axios';

export class Requests {
  async getMe() {
    try {
      const response = await axiosInstance.get('users/me');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  async getBoards(email: string) {
    const response = await axiosInstance.get('board/me', {params: {email}});
    return response.data;
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
