"use client";
import store from "./store";
import { Provider } from "react-redux";
import { ProviderInterface } from "@/interface";

export function Providers({ children }: ProviderInterface) {
  return <Provider store={store}>{children}</Provider>;
}
