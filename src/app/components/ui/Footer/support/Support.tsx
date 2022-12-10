import { Link } from 'react-router-dom';
import styles from './Support.module.scss'

const Support = () => {

    const items: { title: string, link: string }[] = [
        { title: 'О магазине', link: '/about' },
        { title: 'Доставка и оплата', link: '/delivery' },
        { title: 'Скидки и акции', link: '/discounts-and-stock' },
        { title: 'Личный кабинет', link: '/' },
        { title: 'О мафии', link: '/about-mafia' },
    ]

    return (
        <div className={styles.support}>
            <h3>Сервис и поддержка</h3>
            <ul className={styles.list}>
                {items.map(elem => <li key={elem.title} className={styles.item}>
                    <Link to={elem.link}>{elem.title}</Link>
                </li>)}
            </ul>
        </div>
    );
};

export default Support;