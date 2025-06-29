import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./featurs/task.slice";

export const Store = configureStore(
  {
    reducer: {
        todo : taskReducer
    }
  }
)

export type RootState = ReturnType<typeof Store.getState>

export type AppDispatch = typeof Store.dispatch