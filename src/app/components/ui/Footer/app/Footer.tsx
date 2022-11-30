import React from "react";
import logoSite from "../assets/img/image-2 1.png";
import Inst from "../assets/img/icon/Inst.svg";
import Vk from "../assets/img/icon/Vk.svg";
import YT from "../assets/img/icon/youtube.svg";
import sponsor from "../assets/icon-sponsor/image 6.png";
import styles from "./Footer.module.scss";

const Footer = () => {
    return(
        <footer className={styles.Footer}> 
            <div className={styles.Footer__block_greeting}>
                <a href="" className={styles.Footer__logo}>
                    <img src={logoSite}></img>
                </a>
                <p className={styles.Footer__text}>Добро пожаловать в интернет – магазин реквизита для игры в мафию Mafia Rekvizit!</p>
                <p className={styles.Footer__text}>© Все права защищены 2019</p>
            </div>
            <div className={styles.Footer__block_catalog}>
                <h1 className={styles.Footer__header}>Каталог</h1>
                <a href="" className={styles.Footer__text}>Наборы для мафии</a>
                <a href="" className={styles.Footer__text}>Маски</a>
                <a href="" className={styles.Footer__text}>Номерки</a>
                <a href="" className={styles.Footer__text}>Карты</a>
                <a href="" className={styles.Footer__text}>Скатерти</a>
                <a href="" className={styles.Footer__text}>Таблички</a>
                <a href="" className={styles.Footer__text}>Сувениры</a>
            </div>
            <div className={styles.Footer__block_help}>
                <h1 className={styles.Footer__header}>Сервис и поддержка</h1>
                <a href="" className={styles.Footer__text}>О магазине</a>
                <a href="" className={styles.Footer__text}>Доставка и оплата</a>
                <a href="" className={styles.Footer__text}>Скидки и акции</a>
                <a href="" className={styles.Footer__text}>Личный кабинет</a>
                <a href="" className={styles.Footer__text}>О мафии</a>
            </div>
            <div className={styles.Footer__block_info}>
                <h1 className={styles.Footer__header}>8 (064) 765-23-34</h1>
                <p className={styles.Footer__text}>ежедневно, 10:00-22:00</p>
                <h1 className={styles.Footer__header}>shop@mafia-rekvizit.ru</h1>
                <div className={styles.Footer__block_icon}>
                    <a href="">
                        <img src={Vk} className={styles.Footer__VK_icon}></img>
                    </a>
                    <a href="">
                        <img src={Inst} className={styles.Footer__Instagram_icon}></img>
                    </a>
                    <a href="">
                        <img src={YT} className={styles.Footer__Youtube_icon}></img>
                    </a>
                </div>
            </div>
            <div className={styles.Footer__block_form}>
                <h1 className={styles.Footer__header}>Скидка 10% на первую покупку за подписку</h1>
                <form>
                    <input type="email" placeholder="Email"></input>
                    <button type="submit" className={styles.Footer__text}>Подписаться</button>
                </form>
                <p className={styles.Footer__text}>Нажимая кнопку “Подписаться” вы соглашаетесь с <a>Политикой конфиденциальности</a> сайта</p>
                <img src={sponsor}></img>
            </div>
        </footer>
    )
}


export default Footer;