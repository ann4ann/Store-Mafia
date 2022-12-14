import React, {FC} from 'react';
import {productAPI} from '../../../../services/ProductService';
import Card from '../Card';
import styles from './CardsGallery.module.scss';

interface cardsGalleryProps {
   itemsCount: number;
   category: string;
}

const CardsGallery: FC<cardsGalleryProps> = ({itemsCount, category}) => {
   const {
      data: products,
      error: errorProduct,
      isLoading: isLoadingProduct,
   } = productAPI.useFetchProductByCategoryQuery([itemsCount, category]);

   return (
      <section className={styles.cardsGallery}>
         <h4 className={styles.cardsGallery__title}>
            {products?.at(0)?.category.name}
         </h4>
         <div className={styles.cardsGallery__items}>
            {products?.map((product) => (
               <Card />
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
