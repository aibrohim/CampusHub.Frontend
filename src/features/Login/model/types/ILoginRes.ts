export interface ILoginRes {
  accessToken: string;
  data: {
    email: string;
    firstName: string;
    lastName: string;
  };
}
