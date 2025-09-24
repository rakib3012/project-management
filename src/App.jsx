import { RouterProvider } from "react-router/dom";
import router from "./route/route";
import "./App.css";

import BoardProvider from "./context/boardContext";
import ListProvider from "./context/listContext";
import { TaskProvider } from "./context/taskContext";

function App() {
  return (
    <>
      <BoardProvider>
        <ListProvider>
          <TaskProvider>
            <RouterProvider router={router} />
          </TaskProvider>
        </ListProvider>
      </BoardProvider>
    </>
  );
}

export default App;
