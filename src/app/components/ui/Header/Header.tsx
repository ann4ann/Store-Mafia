import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.scss';
import {Link} from 'react-router-dom';

const Header = () => {
   const mainText = 'Тут должен быть слоган';

   return (
      <div className={styles.header}>
         <div className={styles.container}>
            <div className={styles.main_img}>
               <div className={styles.img_container}>
                  <Link to="/">
                     <div className={styles.image}></div>
                  </Link>
                  <p>{mainText}</p>
               </div>
            </div>

            <div className={styles.input}>
               <input type="text" placeholder="Поиск товаров" />
               {/* <div className={styles.input_search}>
                  <ul>
                     <li>Hello</li>
                     <li>World</li>
                     <li>I</li>
                     <li>Am</li>
                     <li>Me</li>
                  </ul>
               </div> */}
            </div>
            <div className={styles.drop_down}>
               <div className={styles.number}>
                  <p>8 (064)765-23-34</p>
                  <button></button>
               </div>
               <div className={styles.line}></div>
               <div className={styles.registration}>
                  <button>Вход / Регистрация</button>
               </div>
            </div>
         </div>
         <Navbar />
      </div>
   );
};

export default Header;
