import React, { useState } from "react";

import { colors } from "../utils/utility";

function Intro({ introData, onRegisterClick }) {
  const [isButtonHover, setButtonHover] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.intro}>
        <h1>{introData.title}</h1>
        <h2>{introData.description}</h2>
        <div
          style={{ ...styles.button, ...(isButtonHover && styles.buttonHover) }}
          onClick={onRegisterClick}
          onMouseOver={() => {
            setButtonHover(true);
          }}
          onMouseLeave={() => setButtonHover(false)}
        >
          Daftar
        </div>
      </div>
      <div style={styles.image} />
    </div>
  );
}

const styles = {
  button: {
    textAlign: "center",
    width: "100px",
    backgroundColor: colors.green,
    borderRadius: "8px",
    color: colors.white,
    display: "inline-block",
    fontWeight: 900,
    margin: "16px 0",
    padding: "2px 20px",
  },
  buttonHover: {
    backgroundColor: colors.greenLight,
    boxShadow: "0 0 4px " + colors.green,
    cursor: "pointer",
  },
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: "30px 0",
  },
  intro: {
    width: "50%",
  },
  image: {
    width: "50%",
    height: "200px",
    borderRadius: "16px",
    backgroundColor: colors.green,
  },
};

export default Intro;
