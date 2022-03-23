import React from "react";
import { colors } from "../utils/utility";

const Footer = ({ style, data }) => {
  return (
    <div style={{ ...style }}>
      <div style={styles.contentContainer}>
        <div style={styles.contentText}>
          <h2>{data.title}</h2>
          <br />
          <p>{data.address}</p>
          <br />
          <p>{data.phoneNumber}</p>
          <br />
          <p>{data.officeHours}</p>
        </div>
        <div style={styles.map}></div>
      </div>
      <div>
        <p style={styles.copyright}>{data.copyright}</p>
      </div>
    </div>
  );
};

const styles = {
  contentContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "50px",
  },
  contentText: {
    width: "50%",
  },
  copyright: {
    marginTop: "30px",
    textAlign: "center",
  },
  map: {
    backgroundColor: colors.green,
    borderRadius: "16px",
    width: "50%",
    height: "200px",
  },
};

export default Footer;
