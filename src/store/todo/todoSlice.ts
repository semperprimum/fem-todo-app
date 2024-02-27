import type { DropResult } from "@hello-pangea/dnd";
import { PayloadAction } from "./../../../node_modules/@reduxjs/toolkit/dist/createAction.d";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TodoState {
  todos: Todo[];
  filter: "all" | "active" | "completed";
}

const initialState: TodoState = {
  todos: [
    {
      id: "1",
      title: "Complete online JavaScript course",
      isCompleted: true,
    },
    {
      id: "2",
      title: "Jog around the park 3x",
      isCompleted: false,
    },
    {
      id: "3",
      title: "10 minutes meditation",
      isCompleted: false,
    },
    {
      id: "4",
      title: "Read for 1 hour",
      isCompleted: false,
    },
    {
      id: "5",
      title: "Pick up groceries",
      isCompleted: false,
    },
    {
      id: "6",
      title: "Complete Todo App on Frontend Mentor",
      isCompleted: false,
    },
  ],
  filter: "all",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: uuidv4(),
        title: action.payload,
        isCompleted: false,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleCompleted: (state, action: PayloadAction<string>) => {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.isCompleted = !todo.isCompleted;
        }
      });
    },
    handleDragEnd: (state, action: PayloadAction<DropResult>) => {
      if (!action.payload.destination) return;

      const todos = [...state.todos];
      const [reorderedItem] = todos.splice(action.payload.source.index, 1);
      todos.splice(action.payload.destination.index, 0, reorderedItem);

      state.todos = todos;
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.isCompleted);
    },
    setFilter: (
      state,
      action: PayloadAction<"all" | "active" | "completed">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const {
  add,
  deleteTodo,
  toggleCompleted,
  clearCompleted,
  handleDragEnd,
  setFilter,
} = todoSlice.actions;

export default todoSlice.reducer;
