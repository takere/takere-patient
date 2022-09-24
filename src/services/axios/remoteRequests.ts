import BoardDTO from '../../dto/board.dto';
import axiosInstance from './axios';

export class Requests {
  
  async getBoards(email: string): Promise<BoardDTO[]> {
    //const response = await axiosInstance.get('board/me', {params: {email}});
    const response = await axiosInstance.get('board/me?email=' + email);
    const boards: BoardDTO[] = response.data;

    // boards.forEach(board => {
    //   board.node.type = this.formatNodeType(board.node.type)
    //   board.node.icon = this.formatNodeIcon(board.node.icon)
    // });
    console.log('----------------', boards)

    return boards;
  }

  private formatNodeIcon(icon: string): string {
    let formattedIcon = icon;

    formattedIcon = formattedIcon.replace('question', 'help');

    return formattedIcon;
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

  async postBoardResponse(boardId: string, result?: any) {
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
