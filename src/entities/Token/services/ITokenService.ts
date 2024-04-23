export interface ITokenService {
  setAccessToken: (token: string) => void;
  removeAccessToken: () => void;
  getAccessToken: () => string;
}
