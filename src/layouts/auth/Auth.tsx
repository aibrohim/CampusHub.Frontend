import { Container } from "@/shared/ui/Container";
import { Logo } from "@/shared/ui/Logo";
import { FC } from "react";
import { Link, Outlet } from "react-router-dom";

interface IAuthLayoutProps {}

export const AuthLayout: FC<IAuthLayoutProps> = () => {
  return (
    <>
      <header className="mb-[80px]">
        <Container className="flex justify-between items-center py-5">
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
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
