import React from "react";
import styles from "./HomePage.module.scss";
import { CardDetailDesc } from './../../ui/CardDetailDesc/CardDetailDesc';

const HomePage = () => {
  return <div className={styles.homePage}><CardDetailDesc /></div>;
};

export default HomePage;
