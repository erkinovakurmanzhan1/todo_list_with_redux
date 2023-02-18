import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  todos: [],
  completed: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    deleteAll(state) {
      state.todos = [];
    },
    delete(state, action) {
      state.todos = state.todos.filter((el) => el.id !== action.payload);
    },
    completed(state, action) {
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
    },
    edit(state, action) {
      console.log(action);
      state.todos = state.todos.map((el) => {
        if (el.id === action.payload.id) {
          return {
            ...el,
            text: action.payload.value,
          };
        }
        return el;
      });
    },
  },
});

export const todoActions = todoSlice.actions;

