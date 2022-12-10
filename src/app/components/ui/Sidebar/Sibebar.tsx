import { FC, useState } from "react";
import styles from "./Sidebar.module.scss"
import { Link } from "react-router-dom";

interface item {
    title: string,
    link: string
}

const Sidebar: FC = () => {

    const [title, setTitle] = useState('Каталог товаров')

    const items: item[] = [
        { title: 'Наборы', link: '/sets' },
        { title: 'Маски', link: '/masks' },
        { title: 'Номерки', link: '/numbers' },
        { title: 'Карты', link: '/cards' },
        { title: 'Скатерти', link: '/tablecloths' },
        { title: 'Таблички', link: '/tablets' },
        { title: 'Сувениры', link: '/souvenirs' },
    ]

    const onClickHandler = (title: string) => {
        setTitle(title)
    }

    return (
        <div className={styles.sidebar}>
            <h1>{title}</h1>
            <header className={styles.navlink}>
                <ul className={styles.list}>
                    {items.map(elem => (
                        <li key={elem.title}
                            onClick={() => onClickHandler(elem.title)}
                            className={title === elem.title ? styles.active : styles.item} >
                            <Link to={elem.link} className={styles.link_1}>{elem.title}</Link>
                        </li>
                    ))}
                </ul>
            </header>
        </div>
    )
}

export default Sidebar