import React from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../../../models/IProduct";
import { item } from "../../pages/Catalog/CatalogNavigate";
import "./card.scss";

const items: item[] = [
  {
    title: 'Наборы', link: 'kit',
    discription: 'Таблички для мафии – это реквизит для фотозоны. Отличные фотографии с их помощью гарантированы! Материал – ПВХ, наклейка. Возможно изготовление табличек на заказ – с вашим логотипом или хештегами'
  },
  {
    title: 'Маски', link: 'masks',
    discription: 'Таблички для мафии – это реквизит для фотозоны. Отличные фотографии с их помощью гарантированы! Материал – ПВХ, наклейка. Возможно изготовление табличек на заказ – с вашим логотипом или хештегами'
  },
  {
    title: 'Номерки', link: 'numbers',
    discription: 'Таблички для мафии – это реквизит для фотозоны. Отличные фотографии с их помощью гарантированы! Материал – ПВХ, наклейка. Возможно изготовление табличек на заказ – с вашим логотипом или хештегами'
  },
  {
    title: 'Карты', link: 'cards',
    discription: 'Таблички для мафии – это реквизит для фотозоны. Отличные фотографии с их помощью гарантированы! Материал – ПВХ, наклейка. Возможно изготовление табличек на заказ – с вашим логотипом или хештегами'
  },
  {
    title: 'Скатерти', link: 'tablecloths',
    discription: 'Таблички для мафии – это реквизит для фотозоны. Отличные фотографии с их помощью гарантированы! Материал – ПВХ, наклейка. Возможно изготовление табличек на заказ – с вашим логотипом или хештегами'
  },
  {
    title: 'Таблички', link: 'tablets',
    discription: 'Таблички для мафии – это реквизит для фотозоны. Отличные фотографии с их помощью гарантированы! Материал – ПВХ, наклейка. Возможно изготовление табличек на заказ – с вашим логотипом или хештегами'
  },
  {
    title: 'Сувениры', link: 'souvenirs',
    discription: 'Таблички для мафии – это реквизит для фотозоны. Отличные фотографии с их помощью гарантированы! Материал – ПВХ, наклейка. Возможно изготовление табличек на заказ – с вашим логотипом или хештегами'
  },
]

const CardItem: React.FC<IProduct> = (data) => {

  const categoryName = items.find(elem => data.category.name === elem.title) || items[0]

  return (
    <div className="card">
      <div className="card-item">
        <span>{data.type}</span>
        <img
          src="http://course.fudzi.kz/numerok.jpg"
          alt={data.name}
          className="product-img"
        />
      </div>
      <span>{data.name}</span>
      <div className="card-footer">
        <span className="price">Цена: {data.price}</span>
        <Link to={`/catalog/${categoryName.link}/${data.id}`} className="btn">
          Купить
        </Link>
      </div>
    </div>
  );
};

export default CardItem;
