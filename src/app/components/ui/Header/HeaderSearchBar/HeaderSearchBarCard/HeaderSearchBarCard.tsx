import React from 'react';
import styles from './HeaderSearchBarCard.module.scss';

interface Card {
   link: string;
   img: string;
   title: string;
   price: number;
}

const HeaderSearchBarCard: React.FC<Card> = ({link, img, title, price}) => {
   return (
      <a href={link}>
         <li className={styles.cardDescription}>
            <img className={styles.img} src={img} alt={img} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.price}>{price} ₽</p>
         </li>
      </a>
   );
};

export default HeaderSearchBarCard;
