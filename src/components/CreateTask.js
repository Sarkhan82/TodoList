import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase.config";
import { addTask, getTasks } from "../feature/task.slice";

const CreateTask = () => {
  const task = useRef();
  const dispatch = useDispatch();

  const handleTask = async (e) => {
    e.preventDefault();

    const data = {
      task: task.current.value,
      date: Date.now(),
    };
    await addDoc(collection(db, "tasks"), data).then(() => {
      dispatch(addTask(data));
      getDocs(collection(db, "tasks")).then((res) =>
        dispatch(
          getTasks(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        )
      );
      task.current.value = "";
    });
  };
  return (
    <div className="create-task">
      <form onSubmit={(e) => handleTask(e)}>
        <input type="text" placeholder="Quoi faire aujourd'hui ?" ref={task} />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default CreateTask;
