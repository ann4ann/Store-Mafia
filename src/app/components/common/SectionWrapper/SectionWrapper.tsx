import React, { FC } from "react";
import styles from "./SectionWrapper.module.scss";

interface sectionWrapperProps {
  mix: string;
  children: React.ReactNode;
}

const SectionWrapper: FC<sectionWrapperProps> = ({ children, mix }) => {
  return (
    <div
      className={styles.sectionWrapper + " " + (mix ? styles[`${mix}`] : "")}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
