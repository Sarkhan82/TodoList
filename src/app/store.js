import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../feature/task.slice";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
