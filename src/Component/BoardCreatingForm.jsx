import { useContext, useState } from "react";

// import { useState } from "react";
import {BoardContext} from "../context/boardContext";

const BoardCreatingForm = () => {
  const [boardTitle,setBoardTitle] = useState('')
  const { dispatchBoardAction } = useContext(BoardContext);
  const submitHandler = (e) => {
    e.preventDefault();
     if(boardTitle.trim() ==''){
      return alert("Enter a Board Name")
    }
    console.log(boardTitle,'title............')
    dispatchBoardAction({type:"CREATE_BOARD", payload : boardTitle})
   
  };

  return (
    <div className="text-2xl text-center mt-10">
      <form onSubmit={submitHandler}>
        <input
          className="border-2 rounded-md outline-0 p-1 text-2xl"
          type="text"
          value={boardTitle}
          onChange={(e)=>{setBoardTitle(e.target.value)}}
          placeholder="Enter board title"
        />
        <button type="submit" className="ms-4 bg-cyan-200 p-2 rounded-2xl">
          {" "}
          Create Board{" "}
        </button>
      </form>
    </div>
  );
};

export default BoardCreatingForm;
