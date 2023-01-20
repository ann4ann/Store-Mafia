import React, { useState } from "react";
import Modal from "../../../common/Modal/Modal";
import HeaderModal from "../HeaderModal/HeaderModal";
import styles from "./HeaderLogIn.module.scss";

const HeaderLogIn: React.FC = () => {
  let name;

  const [modalState, setModalState] = useState<boolean>(false);
  const handleToggleModal = (e: React.MouseEvent) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      setModalState(!modalState);
    }
  };

  return (
    <div className={styles.registration}>
      <Modal toggle={modalState} onToggle={handleToggleModal}>
        <HeaderModal />
      </Modal>

      {name ? (
        <button>Добрый день, {name}</button>
      ) : (
        <button onClick={handleToggleModal}>Вход / Регистрация</button>
      )}
    </div>
  );
};

export default HeaderLogIn;
