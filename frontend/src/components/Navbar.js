import React from "react";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>📚 Book Insight</h2>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#007bff",
    padding: "15px",
    color: "white",
    textAlign: "center",
  },
  logo: {
    margin: 0,
  },
};

export default Navbar;
