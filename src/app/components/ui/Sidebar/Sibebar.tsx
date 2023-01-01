import { FC } from "react";
import styles from "./Sidebar.module.scss"
import { Link } from "react-router-dom";

interface item {
    title: string,
    link: string
}

interface IProps {
    link?: string,
}

const Sidebar: FC<IProps> = ({ link = '' }) => {

    const items: item[] = [
        { title: 'Наборы', link: 'kit' },
        { title: 'Маски', link: 'masks' },
        { title: 'Номерки', link: 'numbers' },
        { title: 'Карты', link: 'cards' },
        { title: 'Скатерти', link: 'tablecloths' },
        { title: 'Таблички', link: 'tablets' },
        { title: 'Сувениры', link: 'souvenirs' },
    ]
    
    return (
        <div className={styles.sidebar}>
            <h1>Каталог товаров</h1>
            <header className={styles.navlink}>
                <ul className={styles.list}>
                    {items.map(elem => (
                        <Link key={elem.title} to={'/catalog/' + elem.link}>
                            <li 
                                className={link === elem.link ? styles.active : styles.item}>
                                {elem.title}
                            </li>
                        </Link>
                    ))}
                </ul>
            </header>
        </div>
    )
}

export default Sidebar