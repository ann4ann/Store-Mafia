import React from "react";
import styles from "./Navbar.module.scss";
import NavbarCardInfo from "./navbarCardInfo/NavbarCardInfo";
import NavbarNavigation from "./navigation/NavbarNavigation";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className="container">
        <div className={styles.navbarWrapper}>
          <NavbarNavigation />
          <NavbarCardInfo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
