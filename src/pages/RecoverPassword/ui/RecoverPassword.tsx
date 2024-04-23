import { Card } from "antd";
import { RecoverPassword } from "@/features/ForgotPassword";
import { Container } from "@/shared/ui/Container";

import { FC } from "react";

export const RecoverPasswordPage: FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Container width={401} className="mb-3 py-5">
        <Card title="Reset your Password">
          <RecoverPassword />
        </Card>
      </Container>
    </div>
  );
};
