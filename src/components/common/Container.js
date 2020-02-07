import React from "react";

const Container = props => {
  return <div style={styles.container}>{props.children}</div>;
};

const styles = {
  container: { width: "100vw", backgroundColor: "#ededed" }
};

export default Container;
