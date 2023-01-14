import React, {useState} from 'react';
import styles from './HeaderContacts.module.scss';

const HeaderContacts: React.FC = () => {
   const [open, setOpen] = useState(false);

   return (
      <div className={styles.number} onClick={() => setOpen(true)}>
         <button>8(064)765-23-34</button>
      </div>
   );
};

export default HeaderContacts;
