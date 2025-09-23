import { createContext,useReducer } from "react";
import boardReducer from "../reducer/board";

const BoardContext = createContext();

 const BoardProvider = (children) => {
  const [boards, dispatchBoardAction] = useReducer(boardReducer);
  return (
    <BoardContext.Provider value={{ boards, dispatchBoardAction }}>
      {children}
    </BoardContext.Provider>
  );
};
export default boardContext;