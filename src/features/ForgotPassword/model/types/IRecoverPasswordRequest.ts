export interface IRecoverPasswordRequest {
  email: string;
  newPassword: string;
  recoveryToken: string;
}
