import React from 'react';
import styles from './HeaderLogo.module.scss';
import {Link} from 'react-router-dom';

const HeaderLogo: React.FC = () => {
   const mainText = 'Тут должен быть слоган';

   return (
      <div className={styles.main_img}>
         <div className={styles.img_container}>
            <Link to="/">
               <div className={styles.image}></div>
            </Link>
            <p>{mainText}</p>
         </div>
      </div>
   );
};

export default HeaderLogo;
