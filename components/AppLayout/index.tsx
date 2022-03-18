import React from "react";

import styles, { globalStyles } from "./styles";

type Props = {
  children: any;
};

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>

      <style jsx>{styles}</style>

      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
};

export default AppLayout;
