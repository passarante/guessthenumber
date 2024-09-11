import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center justify-center h-[80vh]">{children}</div>
  );
};

export default AuthLayout;
