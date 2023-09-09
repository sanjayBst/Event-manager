import React from "react";
import MainNavigation from "../components/MainNavigation";
import classes from "./Root.module.css";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
