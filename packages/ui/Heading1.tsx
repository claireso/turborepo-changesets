import * as React from "react";

interface Props {
  children: React.ReactNode
}

export const Heading1 = ({children}: Props) => {
  return <h1 style={{fontSize: '24px'}}>{children}</h1>
};
