import React, { FC } from "react";
import { product } from "../../../../types/DataTypes";
import Card from "../Card/Card";
import styles from "./CardsGallery.module.scss";

// cardsArr and title for test:
const cardsArr: product[] = [
  {
    img: "string",
    name: "string",
    desc: "string",
    price: 55,
    rate: 3,
  },
  {
    img: "string",
    name: "string",
    desc: "string",
    price: 55,
    rate: 3,
  },
  {
    img: "string",
    name: "string",
    desc: "string",
    price: 55,
    rate: 3,
  },
  {
    img: "string",
    name: "string",
    desc: "string",
    price: 55,
    rate: 3,
  },
];
const title: string = "Хиты продаж";

const CardsGallery: FC =
  // <product[]>
  () =>
    // cardsArr, title: string
    {
      return (
        <section className={styles.cardsGallery}>
          <h4 className={styles.cardsGallery__title}>{title}</h4>
          <div className={styles.cardsGallery__items}>
            {cardsArr.map((item: product) => (
              <Card {...item} />
            ))}
          </div>
          <div className={styles.cardsGallery__pagination}>
            <button>🠔</button>
            <button>🠖</button>
          </div>
        </section>
      );
    };

export default CardsGallery;
