"use client";
import { Provider } from "react-redux";
import { createStore } from "./store";

export function StoreProvider({ children, preloadedState }: any) {
  const store = createStore(preloadedState);

  return <Provider store={store}>{children}</Provider>;
}
