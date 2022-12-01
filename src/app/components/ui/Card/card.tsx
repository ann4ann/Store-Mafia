import React from "react";
import "./card.scss";
import styles from "./Card.module.scss";

const data = {
  aviability: "в наличии",
  price: "590 руб",
  productName: "Номерки для игры мафия «Сицилия»",
};
const CardItem = () => {
  const { aviability, price, productName } = data;
  return (
    <div className={styles.card}>
      <div className="styles.card-item">
        <span>{aviability}</span>
        <img
          src="http://course.fudzi.kz/numerok.jpg"
          alt={productName}
          className="styles.product-img"
        />
      </div>
      <span>{productName}</span>
      <div className="styles.card-footer">
        <span className="styles.price">Цена: {price}</span>
        <a href="https://google.com" className="btn">
          Купить
        </a>
      </div>
    </div>
  );
};

export default CardItem;
