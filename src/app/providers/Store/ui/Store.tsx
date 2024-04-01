import { FC, ReactNode } from "react";
import { Provider } from "react-redux";

import { store } from "../config/configureStore";

interface IStoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: FC<IStoreProviderProps> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
