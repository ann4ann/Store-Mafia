import React from 'react';
import styles from './HeaderImg.module.scss';
import {Link} from 'react-router-dom';

const HeaderImg: React.FC = () => {
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

export default HeaderImg;
