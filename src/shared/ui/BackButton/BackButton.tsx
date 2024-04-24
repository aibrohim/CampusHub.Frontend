import { IconArrowLeft } from "@tabler/icons-react";
import { Button } from "antd";
import { FC } from "react";
import { To, useNavigate } from "react-router-dom";

interface IBackButtonProps {
  backUrl?: To;
}

export const BackButton: FC<IBackButtonProps> = ({ backUrl }) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        if (backUrl) {
          return navigate(backUrl);
        }
        navigate(-1);
      }}
    >
      <IconArrowLeft />
    </Button>
  );
};
