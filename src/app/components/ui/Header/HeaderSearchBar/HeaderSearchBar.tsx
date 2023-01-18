import React, {useState} from 'react';
import HeaderSearchBarCard from './HeaderSearchBarCard';
import maska from './maska3.png';

import styles from './HeaderSearchBar.module.scss';
import {StringMappingType} from 'typescript';

interface ICardsDescription {
   link: string;
   img: string;
   title: string;
   price: number;
}

const HeaderSearchBar: React.FC = () => {
   const [open, setOpen] = useState(false);
   const [userInput, setUserInput] = useState('');

   const cardsDescription: ICardsDescription[] = [
      {
         link: '#',
         img: maska,
         title: 'Маска для мафии “Чикаго” уже в продаже',
         price: 590,
      },
      {
         link: '#',
         img: maska,
         title: 'Маска для мафии “Готэм” уже в продаже',
         price: 590,
      },
      {
         link: '#',
         img: maska,
         title: 'Маска для мафии “Лас-Вегас” уже в продаже',
         price: 1690,
      },
   ];

   const cardDescription = cardsDescription.filter((card) => {
      if (card.title.toLowerCase().includes(userInput.toLowerCase()))
         return card;
   });
   // const filteredCards =
   //    userInput.length > 2
   //       ? cardDescription.map((card: ICardsDescription, index: number) => (
   //            <HeaderSearchBarCard key={index} {...card} />
   //         ))
   //       : '';

   return (
      <div className={styles.input}>
         <div className={open ? styles.fixed : ''}>
            <input
               type="text"
               placeholder="Поиск товаров"
               onClick={() => setOpen(true)}
               onChange={(e) => setUserInput(e.target.value)}
               value={userInput}
            />
            <div
               className={`${styles.input_search} ${
                  open ? styles.visible : ''
               }`}
            >
               {userInput.length > 2 && (
                  <ul>
                     {cardDescription.map(
                        (card: ICardsDescription, index: number) => (
                           <HeaderSearchBarCard key={index} {...card} />
                        )
                     )}
                  </ul>
               )}
            </div>
         </div>
         <div
            className={`${styles.backdrop} ${open ? styles.active : ''}`}
            onClick={() => setOpen(false)}
         />
      </div>
   );
};

export default HeaderSearchBar;
