import { classNames } from "@/shared/lib/classNames";
import { Tooltip } from "antd";
import { TooltipPropsWithTitle } from "antd/es/tooltip";
import { FC } from "react";

import classes from "./CenteredTooltip.module.css";

interface ICenteredTooltipProps extends TooltipPropsWithTitle {
  width?: number;
}

export const CenteredTooltip: FC<ICenteredTooltipProps> = ({
  overlayClassName = "",
  width,
  ...props
}) => {
  return (
    <Tooltip
      overlayClassName={classNames("", {}, [overlayClassName, classes.Tooltip])}
      overlayStyle={{ width }}
      {...props}
    />
  );
};
