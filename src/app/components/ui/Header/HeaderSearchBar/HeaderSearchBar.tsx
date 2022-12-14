import React, {useState} from 'react';
// import maska from './maska3.png';

import styles from './HeaderSearchBar.module.scss';

const HeaderSearchBar: React.FC = () => {
   const [open, setOpen] = useState(false);

   return (
      <div className={styles.input}>
         <div className={open ? styles.fixed : ''}>
            <input
               type="text"
               placeholder="Поиск товаров"
               onClick={() => setOpen(true)}
            />
            <div
               className={`${styles.input_search} ${
                  open ? styles.visible : ''
               }`}
            >
               <ul>
                  <a href="#">
                     <li>Hello</li>
                  </a>
                  <a href="#">
                     <li>My</li>
                  </a>
                  <a href="#">
                     <li>Name</li>
                  </a>
               </ul>
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
