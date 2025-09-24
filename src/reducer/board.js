//  boards= [
// {id,title,boardId:[list1,list2],task:[task,taskId]},
// {id,title,list:[list1,list2],task:[task,taskId]},
// {id,title,list:[list1,list2],task:[task,taskId]}
//  ]
export const boardReducer = (boards = [], action) => {
  switch (action.type) {
    case "Create_Board": {
      const newBoard = {
        id: Date.now() + "",
        title: action.payload.title,
        list: [],
        tasks: [],
      };
      console.log(newBoard,'sdkfasdfkasdfjasdflkasdjkl')
      return [...boards, newBoard];
    }
    case "Change_Title": {
      return boards.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, title: action.payload.title };
        }
        
        return item;
      });
    }
    case "Remove_Board": {
      return boards.filter((item) => item.id !== action.payload.id);
    }

    case "Add_List_Id_To_A_Board": {
      const updatedBoards = boards.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            list: [...item.list, action.payload.listId],
          };
        }
        return item;
      });
      return updatedBoards;
    }
    case "Remove_List_Id_From_A_Board": {
      const updatedBoards = boards.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            list: item.list.filter(
              (listId) => listId !== action.payload.listId
            ),
          };
        }
        return item;
      });
      return updatedBoards;
    }
    case "Add_Task-Id_To_A_Board": {
      const updatedBoards = boards.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            tasks: [...item.tasks, action.payload.tasksId],
          };
        }
        return item;
      });
      return updatedBoards;
    }
    case "Remove_Task_Id_From_A_Board": {
      const updatedBoards = boards.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            tasks: item.tasks.filter(
              (taskId) => taskId !== action.payload.taskId
            ),
          };
        }
        return item;
      });
      return updatedBoards;
    }

    default: {
      return boards;
    }
  }
};
export default boardReducer