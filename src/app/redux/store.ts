import { configureStore } from "@reduxjs/toolkit";
import { reducer as emplooyeReducer } from "./employeeSlice";

export function createStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      employee: emplooyeReducer,
    },
    preloadedState,
  });

  return store;
}

export const store = createStore({});
