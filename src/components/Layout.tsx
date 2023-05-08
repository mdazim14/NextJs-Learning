import React, { FC, ReactNode, useState } from "react";
import SideNavBar from "./SideNavBar";
import NavigationBar from "./NavigationBar";

type PropsType = {
  children: ReactNode;
};

const Layout: FC<PropsType> = ({ children }) => {


  const toggleSideBar = (isToggle: boolean) => {
    // console.log(isToggle);
  };

  return (
    <main>
      <div style={{ display: "flex" }}>
        <div>
          <SideNavBar toggleSideBar={toggleSideBar} />
        </div>

        <div style={{ width: "100%" }}>
          <NavigationBar />

          <div style={{ border: "1px solid black" }}>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
