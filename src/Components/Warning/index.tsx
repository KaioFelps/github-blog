import { ReactNode } from "react-markdown/lib/react-markdown";
import { WarningContainer } from "./style";

type WarningProps = {
  children: ReactNode;
};

export function Warning({ children }: WarningProps) {
  return <WarningContainer>{children}</WarningContainer>;
}
