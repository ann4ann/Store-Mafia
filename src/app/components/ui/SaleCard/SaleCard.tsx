import React from 'react';
import s from './SaleCard.module.scss';
import maska from './maska3.png';

interface SaleCardProps {
   title: string;
   price: string | number;
   img?: string;
}

const SaleCard: React.FC<SaleCardProps> = ({title, price, img = maska}) => {
   return (
      <div className={s.container}>
         <h2 className={s.title}>{title} уже в продаже</h2>
         <div className={s.info}>
            <div className={s.description}>
               <p className={s.price}>{price} ₽</p>
               <button className={s.button}>Подробнее</button>
            </div>
            <div className={s.img}>
               <img src={maska || img} alt="product" />
            </div>
         </div>
      </div>
   );
};

export default SaleCard;
