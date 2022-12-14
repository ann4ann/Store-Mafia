import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

interface IProps {
  price: number,
  name: string,
  type: string
}

const CardItem: React.FC<IProps> = ({ name, price, type}) => {
  return (
    <div className="card">
      <div className="card-item">
        <span>{type}</span>
        <img
          src="http://course.fudzi.kz/numerok.jpg"
          alt={name}
          className="product-img"
        />
      </div>
      <span>{name}</span>
      <div className="card-footer">
        <span className="price">Цена: {price}</span>
        <Link to="/" className="btn">
          Купить
        </Link>
      </div>
    </div>
  );
};

export default CardItem;
