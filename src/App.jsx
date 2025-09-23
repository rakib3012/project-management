 
 import { RouterProvider } from "react-router/dom";
import router from './route/route'
import './App.css'

import BoardProvider from './context/boardContext'

function App() {
  
  return (
    <>
      <BoardProvider>
        <RouterProvider>
          {router}
        </RouterProvider>
      </BoardProvider>
    </>
  )
}

export default App
