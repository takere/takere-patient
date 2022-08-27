interface BoardDTO {
  id: string,
  name: string,
  description: string,
  node: { 
    id: string, 
    results: any,
    type: string,
    bgColor: string,
    icon: string,
  }
}

export default BoardDTO;
