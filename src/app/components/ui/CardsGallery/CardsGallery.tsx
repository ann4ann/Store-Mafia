import React, { FC } from "react";
import { productAPI } from "../../../../services/ProductService";
import Subtitle from "../../common/typografy/Subtitle";
import Card from "../Card";
import styles from "./CardsGallery.module.scss";

interface cardsGalleryProps {
  itemsCount: number;
  category: string;
  title?: string
}

const CardsGallery: FC<cardsGalleryProps> = ({ itemsCount, category, title }) => {
  const {
    data: products,
    error: errorProduct,
    isLoading: isLoadingProduct,
  } = productAPI.useFetchProductByCategoryQuery([itemsCount, category]);

  return (
    <section className={styles.cardsGallery}>
      {title || products ?
        <div className={styles.subtitleInner}>
          <Subtitle mix="center"> {title || products && products[0]?.category.name}</Subtitle>
        </div>
        :
        <Subtitle mix="center"> {title || 'title'}</Subtitle>
      }

      <div className={styles.cardsGallery__items}>
        {(products && products.length > 0) && products.map((product, index) => (
          <Card key={index} {...product} />
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
