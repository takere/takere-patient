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

  async getAgenda(userId: string) {
    return {
      today: [
        { 
          flow: { id: 1, name: 'Diabetes', description: 'Patient with diabetes' }, 
          node: { id: 2, type: 'QUIZ', icon: 'help' }
        }
      ],
      tomorrow: [
        { 
          flow: { id: 1, name: 'Diabetes', description: 'Patient with diabetes' }, 
          node: { id: 2, type: 'MEDICATION CONTROL', icon: 'healing' }
        },
        { 
          flow: { id: 1, name: 'Diabetes', description: 'Patient with diabetes' }, 
          node: { id: 2, type: 'EXPLANATION', icon: 'school' }
        }
      ]
    }
  }

  async getMyProgress(userId: string) {
    return [
      { 
        flow: { 
          id: 1, 
          name: 'Diabetes', 
          description: 'Patient with diabetes',
          progress: [
            { 
              node: {
                icon: 'help', 
                type: 'QUIZ',
                bgColor: '#be96fb'
              },
              completed: 3,
              total: 5
            },
            { 
              node: {
                icon: 'healing', 
                type: 'MEDICATION_CONTROL',
                bgColor: '#db594f'
              },
              completed: 2,
              total: 35
            }
          ]
        } 
      },
      { 
        flow: { 
          id: 2, 
          name: 'Cancer', 
          description: 'Patient with cancer',
          progress: [
            { 
              node: {
                icon: 'healing', 
                type: 'MEDICATION_CONTROL',
                bgColor: '#db594f'
              }, 
              completed: 5,
              total: 12
            }
          ]
        } 
      }
    ]
  }
}
