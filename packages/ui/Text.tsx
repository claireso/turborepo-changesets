import * as React from "react";

interface Props {
  children: React.ReactNode
}

export const Text = ({children}: Props) => {
  return <p style={{fontSize: '16px'}}>{children}</p>
};
