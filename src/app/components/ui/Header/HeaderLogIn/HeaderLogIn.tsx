import React from 'react';
import styles from './HeaderLogIn.module.scss';

const HeaderLogIn: React.FC = () => {
   let name;

   return (
      <div className={styles.registration}>
         {name ? (
            <button>Добрый день, {name}</button>
         ) : (
            <button>Вход / Регистрация</button>
         )}
      </div>
   );
};

export default HeaderLogIn;
