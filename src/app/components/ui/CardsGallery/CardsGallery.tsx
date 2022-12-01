import React, { FC } from "react";
import { product } from "../../../../types/DataTypes";
import Card from "../Card";
import styles from "./CardsGallery.module.scss";

// cardsArr and title for test:
const cardsArr: product[] = [
  {
    img: ["string", "string"],
    name: "string",
    desc: "string",
    price: 55,
    rate: { rate: 4.2, count: 7 },
  },
  {
    img: ["string", "string"],
    name: "string",
    desc: "string",
    price: 55,
    rate: { rate: 4.2, count: 7 },
  },
  {
    img: ["string", "string"],
    name: "string",
    desc: "string",
    price: 55,
    rate: { rate: 4.2, count: 7 },
  },
  {
    img: ["string", "string"],
    name: "string",
    desc: "string",
    price: 55,
    rate: { rate: 4.2, count: 7 },
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
              <Card />
              // Удалить, когда добавится Card
              // <div className={styles.card}>Card</div>
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
