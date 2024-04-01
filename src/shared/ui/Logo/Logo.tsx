import { FC } from "react";

import { ReactComponent as LogoSVG } from "@/shared/images/logo.svg";

interface ILogoProps {
  width?: number;
  height?: number;
}

export const Logo: FC<ILogoProps> = ({ width = 78, height = 32 }) => {
  return <LogoSVG width={width} height={height} />;
};
