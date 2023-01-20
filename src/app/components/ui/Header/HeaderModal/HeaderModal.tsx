import React, { useState } from "react";
import Button from "../../../common/Button/Button";
import Subtitle from "../../../common/typografy/Subtitle";
import styles from "./HeaderModal.module.scss";

const HeaderModal = () => {
  const [isLogin, setIsLogin] = useState(true);
  const handleToggle = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className={styles.headerModal}>
      <Subtitle>{isLogin ? "Вход" : "Регистрация"}</Subtitle>
      <div className={styles.choise}>
        {!isLogin ? "Уже зарегистрированы? " : "Нет аккаунта? "}
        <span className={styles.underline} onClick={handleToggle}>
          {isLogin ? "Регистрация" : "Вход"}
        </span>
      </div>
      <form action="">
        {!isLogin && (
          <div className={styles.textField}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
        )}
        <div className={styles.textField}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
        </div>
        <div className={styles.textField}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <Button />
      </form>
    </div>
  );
};

export default HeaderModal;
