import { STORAGE_TOKEN_KEY } from "../constants";
import { ITokenService } from "./ITokenService";

export const tokenService: ITokenService = {
  setAccessToken: (token) => localStorage.setItem(STORAGE_TOKEN_KEY, token),
  removeAccessToken: () => localStorage.removeItem(STORAGE_TOKEN_KEY),
  getAccessToken: () => localStorage.getItem(STORAGE_TOKEN_KEY) ?? "",
};
