
import { createContext,   useReducer } from "react";
import { listReducer } from "../reducer/list";

const ListContext = createContext()

 const ListProvider = ({children}) => {
    const [list, dispatchListAction] = useReducer(listReducer)
  return (
    <ListContext.Provider value={{list, dispatchListAction}}>
        {children}
    </ListContext.Provider>
  )
}
export default ListProvider;