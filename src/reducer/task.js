
//  tasks= [
// {id,title,boardId:[list1,list2],task:[task,taskId]},
// {id,title,list:[list1,list2],task:[task,taskId]},
// {id,title,list:[list1,list2],task:[task,taskId]}
//  ]
export const taskReducer = (tasks=[], action)=>{
    switch(action.type){
        case "CREATE_TASK" :{
            const newTasks = {
                id: Date.now() +'',
                title: action.payload.title,
                doardId: action.payload.boardId,
                listId : action.payload.listId
            }
            return [...tasks, newTasks]
        }
        case "UPDATE_TASK_TITLE" : {
            const updatedTasks = tasks.map(item=>{
                if(item.id===action.payload.id){
                    return { ...item, title:action.payload.title}
                }
                return item
            })
            return updatedTasks
        }
        case "REMOVE_TASK" : {
            return  tasks.filter(item => item.id !== action.payload.id)
              
        }
        
    }
}