import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavbarNavigation.module.scss'

interface IListItem {
    title: string,
    link: string
}

const NavbarNavigation = () => {

    const listItems: IListItem[] = [
        { title: 'Все товары', link: 'catalog' },
        { title: 'Скидки и акции', link: 'discounts-and-stock' },
        { title: 'О мафии', link: 'about-mafia' },
        { title: 'Доставка и оплата', link: 'delivery' },
        { title: 'О нас', link: 'about' },
        { title: 'Контакты', link: 'сontacts' },
    ]

    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigationItems}>
                {
                    listItems.map((item: IListItem, index: number) => (
                        <li key={index} className={styles.navigationItem}>
                            <Link className={styles.navigationLink} to={item.link}>{item.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default NavbarNavigation;