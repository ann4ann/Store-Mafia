import React from "react";
import styles from "./HomePage.module.scss";
import { CardDetailGalery } from './../../ui/CardDetailGalery/CardDetailGalery';

const HomePage = () => {
  return <div className={styles.homePage}><CardDetailGalery/></div>;
};

export default HomePage;
