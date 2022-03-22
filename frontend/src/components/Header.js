import React, { useState } from "react";

import { colors } from "../utils/utility";

const Header = ({ navData, onNavClick }) => {
  const [onHovers, setHovers] = useState(navData.map(() => false));

  return (
    <div style={styles.container}>
      <img style={styles.logo} src="./images/logo.jpg" alt="logo" />
      <div style={styles.navContainer}>
        {navData.map((n) => (
          <div
            style={{
              ...styles.navItem,
              ...(onHovers[n.id] && styles.navOnHover),
            }}
            key={n.id.toString()}
            onClick={() => onNavClick(n.id)}
            onMouseOver={() => {
              setHovers(onHovers.map((h, i) => (i === n.id ? true : h)));
            }}
            onMouseLeave={() => {
              setHovers(onHovers.map((h, i) => (i === n.id ? false : h)));
            }}
          >
            <p style={styles.text}>{n.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  logo: {
    height: "100px",
  },
  navContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  navItem: {
    padding: "8px 10px",
    margin: "0 4px",
    color: colors.black,
  },
  navOnHover: {
    color: colors.green,
    cursor: "pointer",
  },
  text: {
    fontWeight: "900",
  },
};

export default Header;
