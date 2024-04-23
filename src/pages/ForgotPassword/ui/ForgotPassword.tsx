import { FC, useState } from "react";
import { Link } from "react-router-dom";

import {
  ForgotPassword,
  ForgotPasswordSuccess,
} from "@/features/ForgotPassword";

import { Container } from "@/shared/ui/Container";
import { Description } from "@/shared/ui/Description";
import { Title } from "@/shared/ui/Title";
import { Card } from "antd";

export const ForgotPasswordPage: FC = () => {
  const [sentMail, setSentMail] = useState<string>("");

  const handleMailSent = (mail: string) => setSentMail(mail);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      {sentMail ? (
        <Container width={640} className="py-5">
          <ForgotPasswordSuccess email={sentMail} />
        </Container>
      ) : (
        <Container width={401} className="mb-3 py-5">
          <Card className="w-full" title="Forgot Password?">
            <Description className="mb-8">
              Enter your email to reset your password.
            </Description>
            <ForgotPassword onMailSent={handleMailSent} />
            <p className="text-center text-gray-500 text-sm m-0 mt-5">
              Remember your password?{" "}
              <Link
                to="/login"
                className="text-gray-700 hover:text-gray-700 font-semibold"
              >
                Log in
              </Link>
            </p>
          </Card>
        </Container>
      )}
    </div>
  );
};
