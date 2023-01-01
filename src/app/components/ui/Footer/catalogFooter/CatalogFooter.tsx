import { Link } from 'react-router-dom';
import styles from './CatalogFooter.module.scss'

interface item {
    title: string,
    link: string
}

const CatalogFooter: React.FC = () => {

    const items: item[] = [
        { title: 'Наборы', link: 'catalog/kit' },
        { title: 'Маски', link: 'catalog/masks' },
        { title: 'Номерки', link: 'catalog/numbers' },
        { title: 'Карты', link: 'catalog/cards' },
        { title: 'Скатерти', link: 'catalog/tablecloths' },
        { title: 'Таблички', link: 'catalog/tablets' },
        { title: 'Сувениры', link: 'catalog/souvenirs' },
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

export default CatalogFooter;