import styles from './LogoInner.module.scss'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';

const LogoInner: React.FC = () => {
    return (
        <div className={styles.logoInner}>
            <Link to={'/'}><img className={styles.logo} src={logo} alt="logo" /></Link>
            <p className={styles.text}>Добро пожаловать в интернет – магазин реквизита для игры в мафию Mafia Rekvizit!</p>
            <p>© Все права защищены 2019</p>
        </div>
    );
};

export default LogoInner;