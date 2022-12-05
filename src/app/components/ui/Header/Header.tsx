import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.scss';

import HeaderImg from './HeaderImg';
import HeaderInput from './HeaderInput';
import HeaderNumber from './HeaderNumber';
import HeaderLogIn from './HeaderLogIn';

const Header: React.FC = () => {
   return (
      <div className={styles.header}>
         <Wrapper>
            <div className={styles.container}>
               <HeaderImg />
               <div className={styles.inner}>
                  <HeaderInput />
                  <div className={styles.drop_down}>
                     <HeaderNumber />
                     <div className={styles.line}></div>
                     <HeaderLogIn />
                  </div>
               </div>
            </div>
         </Wrapper>
         <Navbar />
      </div>
   );
};

export default Header;
