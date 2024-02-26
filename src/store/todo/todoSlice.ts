import { PayloadAction } from "./../../../node_modules/@reduxjs/toolkit/dist/createAction.d";
import { createSlice } from "@reduxjs/toolkit";

interface Todo {
  title: string;
  isCompleted: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [
    {
      title: "Complete online JavaScript course",
      isCompleted: true,
    },
    {
      title: "Jog around the park 3x",
      isCompleted: false,
    },
    {
      title: "10 minutes meditation",
      isCompleted: false,
    },
    {
      title: "Read for 1 hour",
      isCompleted: false,
    },
    {
      title: "Pick up groceries",
      isCompleted: false,
    },
    {
      title: "Complete Todo App on Frontend Mentor",
      isCompleted: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        title: action.payload,
        isCompleted: false,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos.splice(action.payload, 1);
    },
    toggleCompleted: (state, action: PayloadAction<number>) => {
      state.todos[action.payload].isCompleted =
        !state.todos[action.payload].isCompleted;
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.isCompleted);
    },
  },
});

export const { add, deleteTodo, toggleCompleted, clearCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
