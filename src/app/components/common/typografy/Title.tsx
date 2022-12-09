import React, { FC, ReactNode } from "react";
import styles from "./Title.module.scss";

const Title: FC<{ children: ReactNode }> = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};

export default Title;
