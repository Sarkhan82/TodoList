import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../feature/task.slice";
import { db } from "../utils/firebase.config";
import Delete from "./Delete";

const List = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    getDocs(collection(db, "tasks")).then((res) =>
      dispatch(getTasks(res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
    );
  }, []);

  return (
    <ul className="task-list">
      {tasks &&
        [...tasks].map((task) => (
          <li>
            {task.task} <Delete id={task.id} />
          </li>
        ))}
    </ul>
  );
};

export default List;
