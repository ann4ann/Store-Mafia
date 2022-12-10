import { Link } from 'react-router-dom';
import styles from './CotalogFooter.module.scss'

const CotalogFooter: React.FC = () => {

    const items: { title: string, link: string }[] = [
        { title: 'Набор для мафии', link: '#' },
        { title: 'Маски', link: '#' },
        { title: 'Номерки', link: '#' },
        { title: 'Карты', link: '#' },
        { title: 'Скатерти', link: '#' },
        { title: 'Таблички', link: '#' },
        { title: 'Сувениры', link: '#' },
    ]

    return (
        <div className={styles.cotalogFooter}>
            <h3>Каталог</h3>
            <ul className={styles.list}>
                {items.map(elem => <li key={elem.title} className={styles.item}>
                    <Link to={elem.link}>{elem.title}</Link>
                </li>)}
            </ul>
        </div>
    );
};

export default CotalogFooter;