import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./Navbar.module.scss";
import NavbarCardInfo from "./navbarCardInfo/NavbarCardInfo";
import NavbarNavigation from "./navigation/NavbarNavigation";

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <Wrapper>
        <div className={styles.navbarWrapper}>
          <NavbarNavigation />
          <NavbarCardInfo />
        </div>
      </Wrapper>
    </div>

  );
};

export default Navbar;
