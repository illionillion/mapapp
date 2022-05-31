import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className="min-h-screen bg-sub-color md:px-16 md:py-24">
      {children}
    </div>
  );
};
