import { classNames } from "@/shared/lib/classNames";
import { Button, ButtonProps } from "antd";
import { FC, MouseEvent } from "react";
import { useMatch, useNavigate } from "react-router-dom";

interface ILinkButtonProps extends ButtonProps {
  to?: string;
  navLink?: boolean;
  onClick?: () => void;
}

export const LinkButton: FC<ILinkButtonProps> = ({
  to,
  navLink,
  className,
  onClick,
  ...props
}) => {
  const doesRouteMatch = useMatch(to || "");

  const navigate = useNavigate();

  const handleBtnClick = (evt: MouseEvent) => {
    if (to) {
      evt.preventDefault();

      navigate(to);
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      onClick={handleBtnClick}
      className={classNames(
        "",
        {
          active: !!(navLink && doesRouteMatch),
        },
        [className]
      )}
      {...props}
    />
  );
};
