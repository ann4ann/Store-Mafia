import React, { FC, ReactNode } from "react";
import styles from "./Subtitle.module.scss";

interface subtitleProps {
  children: ReactNode;
  mix?: string;
}

const Subtitle: FC<subtitleProps> = ({ children, mix }) => {
  return (
    <h4 className={styles.subtitle + " " + (mix ? styles[`${mix}`] : "")}>
      {children}
    </h4>
  );
};

export default Subtitle;
