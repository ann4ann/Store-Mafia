import React from 'react';
import styles from './HeaderNumber.module.scss';

const HeaderNumber: React.FC = () => {
   return (
      <div className={styles.number}>
         <p>8(064)765-23-34</p>
         <button></button>
      </div>
   );
};

export default HeaderNumber;
