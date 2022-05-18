import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../feature/task.slice";
import { db } from "../utils/firebase.config";

const Delete = ({ id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    deleteDoc(doc(db, "tasks", id)).then(() => {
      dispatch(deleteTask(id));
    });
  };
  return (
    <span className="delete" onClick={(e) => handleDelete()}>
      <i className="fa-solid fa-trash-can"></i>
    </span>
  );
};

export default Delete;
