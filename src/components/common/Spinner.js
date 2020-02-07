import React from "react";
import spinner from "../../assets/spinner.gif";

const Spinner = () => {
  return (
    <div style={styles.spinnerMain}>
      <img src={spinner} style={styles.spinnerImg} />
    </div>
  );
};

const styles = {
  spinnerMain: { margin: "auto", textAlign: "center", height: "70vh" },
  spinnerImg: { width: "20vw", height: "20vw" }
};

export default Spinner;
