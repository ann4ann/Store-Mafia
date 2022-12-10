import { Link } from 'react-router-dom';
import styles from './CotalogFooter.module.scss'

interface item {
    title: string,
    link: string
}

const CotalogFooter: React.FC = () => {

    const items: item[] = [
        { title: 'Наборы', link: '/sets' },
        { title: 'Маски', link: '/masks' },
        { title: 'Номерки', link: '/numbers' },
        { title: 'Карты', link: '/cards' },
        { title: 'Скатерти', link: '/tablecloths' },
        { title: 'Таблички', link: '/tablets' },
        { title: 'Сувениры', link: '/souvenirs' },
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