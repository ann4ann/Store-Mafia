import React from "react";
import CardDetailDetails from "../../ui/CardDetailDetails/CardDetailDetails";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return <div className={styles.homePage}>
    <CardDetailDetails/>
  </div>;
};

export default HomePage;
