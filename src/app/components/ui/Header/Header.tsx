import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.scss';

import HeaderLogo from './HeaderLogo';
import HeaderSearchBar from './HeaderSearchBar';
import HeaderContacts from './HeaderContacts';
import HeaderLogIn from './HeaderLogIn';

const Header: React.FC = () => {
   return (
      <div className={styles.header}>
         <Wrapper>
            <div className={styles.container}>
               <HeaderLogo />
               <div className={styles.inner}>
                  <HeaderSearchBar />
                  <div className={styles.drop_down}>
                     <HeaderContacts />
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
