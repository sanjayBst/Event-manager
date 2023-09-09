import React from "react";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import classes from "./Error.module.css";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occurred";
  let message = "Somethhing went wrong";

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Page not found !.";
    message = "Could not find resources or page.";
  }

  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <PageContent title={title}>
          <p>{message}</p>
        </PageContent>
      </main>
    </>
  );
};

export default ErrorPage;
