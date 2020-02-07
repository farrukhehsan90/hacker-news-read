import React from "react";
import { Typography } from "@material-ui/core";
import moment from "moment";

const ListItem = ({ title, website, score, by, time, descendants }) => {
  return (
    <div
      onClick={() => window.open(website ? website : "", "_blank")}
      style={styles.listItemMain}
    >
      <Typography>{`${title ? title : "No title"} (${
        website ? website.split("//")[1].split("/")[0] : ""
      })`}</Typography>
      <Typography>{`${score} points by ${by} | ${
        time ? moment(time, "HH").format("HH") : ""
      } ${time ? "hours ago" : "N/A"} | ${descendants} comments`}</Typography>
    </div>
  );
};

const styles = {
  listItemMain: {
    backgroundColor: "#fff",
    width: "100vw",
    height: "10vw",
    padding: "2%",
    boxShadow: "3px 2px 1px #939393",
    display: "flex",
    flexDirection: "column"
  }
};

export default ListItem;
