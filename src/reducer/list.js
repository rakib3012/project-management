// list =[{id , title , boardId, tasksId:[list1,list2]}, {id , title , boardId, tasksId:[list1,list2]}]
export const listReducer = (state=[], action)=>{
switch(action.type){
    case "create_list_id":{
        const newList ={
            id:action.payload.id,
            title:action.payload.title,
            boardId:action.payload.boardId,
            taskId:[]
        }
        return {...list, newList}
    }
        case "change_list_title":{
       const updatedList = list.map(item=>{
            if(item.id === action.payload.id){
                return {...item, title:action.payload.title}
            }
            return item
        })
        return updatedList
    }
    case "remove_list":{
        return list.filter(item=>item.id !==action.payload.listId)
    }

    case "change_board_id":{
        const updatedList = list.map(item=>{
            if(item.id === action.payload.id){
                return {...item, boardId:action.payload.boardId}
            }
            return item
        })
        return updatedList
    }

    case "remove_board_id":{
        return list.filter(item=>item.boardId !== action.payload.boardId)
    }
    case "add_task_id_to_a_list":{
        const updatedList = list.map(item=>{
            if(item.id === action.payload.id){
                return {...item, boardId:action.payload.boardId}
            }
            return item
        })
        return updatedList
    }
    case "remove_task_id_from_a_list":{}
    default:{
        return list
    }
}
}