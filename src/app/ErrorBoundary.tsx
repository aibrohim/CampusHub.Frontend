import { Container } from "@/shared/ui/Container";
import { Logo } from "@/shared/ui/Logo";
import { Result } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

export const ErrorBoundary: FC = () => {
  return (
    <div>
      <Container>
        <header className="py-5 flex items-center justify-between">
          <Link to={"/"}>
            <Logo />
          </Link>
          <div>
            <p className="m-0">
              <span className="text-gray-500 mr-[5px]">Need Help?</span>{" "}
              <a
                className="text-black hover:text-black font-semibold"
                href="mailto:support@usedigest.com"
              >
                Contact us
              </a>
            </p>
          </div>
        </header>
        <Result status="error" title="Error occured. We'll fix it soon!" />
      </Container>
    </div>
  );
};
