import * as React from "react";

interface Props {
  children: React.ReactNode
}

export const Button = ({children}: Props) => {
  return <button>{children}</button>;
};
