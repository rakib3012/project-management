import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

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