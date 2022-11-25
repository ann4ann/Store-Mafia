import React from "react";
import styles from "./Sidebar.module.scss"
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <h1>Каталог товаров</h1>
            <header className={styles.navlink}>
                <NavLink to="/#">Наборы</NavLink><br/>
                <NavLink to="/#">Маски</NavLink><br/>
                <NavLink to="/#">Номерки</NavLink><br/>
                <NavLink to="/#">Карты</NavLink><br/>
                <NavLink to="/#">Скатерти</NavLink><br/>
                <NavLink to="/#">Таблички</NavLink><br/>
                <NavLink to="/#">Сувениры</NavLink>
            </header>
        </div>
    )
}

export default Sidebar