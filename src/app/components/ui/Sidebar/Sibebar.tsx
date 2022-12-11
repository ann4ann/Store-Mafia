import { FC, useState } from "react";
import styles from "./Sidebar.module.scss"
import { Link } from "react-router-dom";

interface item {
    title: string,
    link: string
}

interface IProps {
    activeTitle?: string
}

const Sidebar: FC<IProps> = ({activeTitle = 'Каталог товаров'}) => {

    const [title, setTitle] = useState(activeTitle)

    const items: item[] = [
        { title: 'Наборы', link: '/cotalog/sets' },
        { title: 'Маски', link: '/cotalog/masks' },
        { title: 'Номерки', link: '/cotalog/numbers' },
        { title: 'Карты', link: '/cotalog/cards' },
        { title: 'Скатерти', link: '/cotalog/tablecloths' },
        { title: 'Таблички', link: '/cotalog/tablets' },
        { title: 'Сувениры', link: '/cotalog/souvenirs' },
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
                        <Link to={elem.link}>
                            <li key={elem.title}
                                onClick={() => onClickHandler(elem.title)}
                                className={title === elem.title ? styles.active : styles.item} >
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