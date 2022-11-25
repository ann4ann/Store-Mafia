import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.scss';

const Header = () => {
   return (
      <div className={styles.header}>
         <div className={styles.head}>
            <div className={styles.container}>
               <div className={styles.image}></div>
               <div className={styles.input}>
                  <input type="text" placeholder="Поиск товаров" />
               </div>
               <div className={styles.number}>
                  <p>8 (064)765-23-34</p>
                  <button>
                     <img
                        src="https://icon-library.com/images/icon-arrow-down/icon-arrow-down-1.jpg"
                        alt="arrow-down"
                     />
                  </button>
               </div>
               <div className={styles.line}></div>
               <div className={styles.registration}>
                  <button>
                     Вход / Регистрация
                     <img
                        src="https://icon-library.com/images/icon-arrow-down/icon-arrow-down-1.jpg"
                        alt="arrow-down"
                     />
                  </button>
               </div>
            </div>
         </div>
         <Navbar />
      </div>
   );
};

export default Header;
