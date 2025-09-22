
//  tasks= [
// {id,title,boardId:[list1,list2],task:[task,taskId]},
// {id,title,list:[list1,list2],task:[task,taskId]},
// {id,title,list:[list1,list2],task:[task,taskId]}
//  ]
export const taskReducer = (state=[], action)=>{
    switch(action.type){
        case "CREATE_TASK_ID" :{
            const newTask = {
                id: Date.now() +'',
                title: action.payload.title,
                doardId: action.payload.boardId,
                listId : action.payload.listId
            }
            return [...tasks, newTask]
        }
        
    }
}