import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = ({ history }) => {
  return (
    <AppBar position="static">
      <Toolbar style={styles.toolbar}>
        <img src={logo} style={styles.logo} />
        <Typography
          onClick={() => history.push("/")}
          style={styles.headingText}
        >
          News
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  toolbar: { backgroundColor: "#4d004d" },
  logo: { width: "4vw", height: "4vw" },
  headingText: { paddingLeft: "2%", cursor: "pointer" }
};

export default withRouter(Header);
