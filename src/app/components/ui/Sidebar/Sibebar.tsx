import React from "react";
import styles from "./Sidebar.module.scss"
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <h1>Каталог товаров</h1>
            <header className={styles.navlink}>
                <ul>
                    <li><NavLink to="/#" className={styles.link_1}>Наборы</NavLink></li>
                    <li><NavLink to="/#" className={styles.link_1}>Маски</NavLink></li>
                    <li><NavLink to="/#" className={styles.link_1}>Номерки</NavLink></li>
                    <li><NavLink to="/#" className={styles.link_1}>Карты</NavLink></li>
                    <li><NavLink to="/#" className={styles.link_1}>Скатерти</NavLink></li>
                    <li><NavLink to="/#" className={styles.link_1}>Таблички</NavLink></li>
                    <li><NavLink to="/#" className={styles.link_1}>Сувениры</NavLink></li>
                </ul>
            </header>
        </div>
    )
}

export default Sidebar