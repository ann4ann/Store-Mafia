import React, { FC } from "react";
import styles from "./Modal.module.scss";
import { MdClose } from "react-icons/md";

interface modalProps {
  children: React.ReactNode;
  toggle: boolean;
  onToggle: (e: React.MouseEvent) => void;
}

const Modal: FC<modalProps> = ({ toggle, onToggle, children }) => {
  return (
    <div
      className={`${styles.wrapper} ${toggle ? styles.active : ""}`}
      onClick={onToggle}
    >
      <div className={styles.modal}>
        {children}
        <MdClose className={styles.close} onClick={onToggle} />
      </div>
    </div>
  );
};

export default Modal;
