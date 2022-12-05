import React from 'react';
import styles from './HeaderInput.module.scss';

const HeaderInput: React.FC = () => {
   return (
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
   );
};

export default HeaderInput;
