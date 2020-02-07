import React from "react";
import { ArrowBackRounded, ArrowForwardRounded } from "@material-ui/icons";
import { Typography } from "@material-ui/core";

const ToolBar = ({
  count,
  limit,
  onDecreaseCount,
  onIncreaseCount,
  totalItems
}) => {
  return (
    <div style={styles.toolbar}>
      <ArrowBackRounded
        style={count === 0 ? styles.arrowDisabled : styles.arrow}
        onClick={count === 0 ? null : onDecreaseCount}
      />
      <Typography style={{ fontSize: "4vw" }}>{`${count + 1}/${count +
        limit}`}</Typography>
      <ArrowForwardRounded
        style={count >= totalItems ? styles.arrowDisabled : styles.arrow}
        onClick={count >= totalItems ? null : onIncreaseCount}
      />
    </div>
  );
};

const styles = {
  toolbar: {
    marginBottom: "5%",
    display: "flex",
    boxShadow: "2px 3px 3px #d3d3d3",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "10vw",
    backgroundColor: "#fff"
  },
  arrowDisabled: {
    color: "#d3d3d3",
    fontSize: "4vw"
  },
  arrow: {
    fontSize: "4vw"
  }
};

export default ToolBar;
