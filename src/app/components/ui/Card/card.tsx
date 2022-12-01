import React from "react";
import "./card.scss";

const data = {
  aviability: "в наличии",
  price: "590 руб",
  productName: "Номерки для игры мафия «Сицилия»",
};
const CardItem = () => {
  const { aviability, price, productName } = data;
  return (
    <div className="card">
      <div className="card-item">
        <span>{aviability}</span>
        <img
          src="http://course.fudzi.kz/numerok.jpg"
          alt={productName}
          className="product-img"
        />
      </div>
      <span>{productName}</span>
      <div className="card-footer">
        <span className="price">Цена: {price}</span>
        <a href="https://google.com" className="btn">
          Купить
        </a>
      </div>
    </div>
  );
};

export default CardItem;
