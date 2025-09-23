import { createBrowserRouter } from "react-router";
 
import Board from "../pages/Board";
import BoardList from "../pages/BoardList";

const router = createBrowserRouter([

  {
    path:"/",
    element:<Board/>
  },
  {
    path:"/board/boardId",
    element:<BoardList/>
  }
]);

export default router