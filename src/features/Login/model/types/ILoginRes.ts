import { IUser } from "@/entities/User";

export interface ILoginRes {
  accessToken: string;
  data: IUser;
}
