import React from "react";

const ContentBody = ({ title, children }) => {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>{title}</h3>
      {children}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
  },
  title: {
    padding: "50px",
  },
};

export default ContentBody;
