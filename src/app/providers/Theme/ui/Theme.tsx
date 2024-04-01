import { App, ConfigProvider } from "antd";
import { FC, ReactNode } from "react";
import { theme } from "../config/theme";

interface IThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => (
  <ConfigProvider theme={theme}>
    <App>{children}</App>
  </ConfigProvider>
);
