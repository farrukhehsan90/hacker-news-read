import React, { Fragment } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Toolbar } from "@material-ui/core";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
