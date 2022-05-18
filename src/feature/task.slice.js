import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: null,
  },
  reducers: {
    getTasks: (state, { payload }) => {
      state.tasks = payload;
    },
    addTask: (state, { payload }) => {
      state.tasks.push(payload);
    },
    deleteTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
    },
  },
});

export const { getTasks, addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
