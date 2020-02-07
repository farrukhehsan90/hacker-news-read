import React from "react";
import { Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <div style={styles.footer}>
      <Typography>
        Created by{" "}
        <a
          style={styles.link}
          target="_blank"
          href="https://www.linkedin.com/in/farrukh-ehsan"
        >
          Farrukh Ehsan
        </a>
      </Typography>
    </div>
  );
};

const styles = {
  footer: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    height: "5vw",
    alignItems: "flex-end"
  },
  link: { color: "#000" }
};

export default Footer;
