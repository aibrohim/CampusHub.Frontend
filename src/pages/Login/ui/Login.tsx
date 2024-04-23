import { FC } from "react";

import { Login as LoginForm } from "@/features/Login";
import { Card } from "antd";

export const Login: FC = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center p-8">
      <Card title="Login" className="max-w-[400px] w-full">
        <LoginForm />
      </Card>
    </div>
  );
};
