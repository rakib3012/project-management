import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path:"/board",
    element:<Board/>
  },
  {
    path:"/board/boardId",
    element:<BoardList/>
  }
]);

