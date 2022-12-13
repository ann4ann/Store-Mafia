import { Navigate, Route, Routes } from 'react-router-dom';
import CatalogContent from '../../ui/CatalogContent/CatalogContent';
import PathNavigate from '../../ui/PathNavigate/PathNavigate';
import Wrapper from '../../ui/Wrapper/Wrapper';
import styles from './Catalog.module.scss'

interface item {
    title: string,
    link: string,
    discription: string
}

const Catalog: React.FC = () => {

    const items: item[] = [
        {
            title: 'Наборы', link: 'sets',
            discription: 'Таблички для мафии – это реквизит для фотозоны. Отличные фотографии с их помощью гарантированы! Материал – ПВХ, наклейка. Возможно изготовление табличек на заказ – с вашим логотипом или хештегами'
        },
        {
            title: 'Маски', link: 'masks',
            discription: 'Таблички для мафии – это реквизит для фотозоны. Отличные фотографии с их помощью гарантированы! Материал – ПВХ, наклейка. Возможно изготовление табличек на заказ – с вашим логотипом или хештегами'
        },
        {
            title: 'Номерки', link: 'numbers',
            discription: 'Таблички для мафии – это реквизит для фотозоны. Отличные фотографии с их помощью гарантированы! Материал – ПВХ, наклейка. Возможно изготовление табличек на заказ – с вашим логотипом или хештегами'
        },
        {
            title: 'Карты', link: 'cards',
            discription: 'Таблички для мафии – это реквизит для фотозоны. Отличные фотографии с их помощью гарантированы! Материал – ПВХ, наклейка. Возможно изготовление табличек на заказ – с вашим логотипом или хештегами'
        },
        {
            title: 'Скатерти', link: 'tablecloths',
            discription: 'Таблички для мафии – это реквизит для фотозоны. Отличные фотографии с их помощью гарантированы! Материал – ПВХ, наклейка. Возможно изготовление табличек на заказ – с вашим логотипом или хештегами'
        },
        {
            title: 'Таблички', link: 'tablets',
            discription: 'Таблички для мафии – это реквизит для фотозоны. Отличные фотографии с их помощью гарантированы! Материал – ПВХ, наклейка. Возможно изготовление табличек на заказ – с вашим логотипом или хештегами'
        },
        {
            title: 'Сувениры', link: 'souvenirs',
            discription: 'Таблички для мафии – это реквизит для фотозоны. Отличные фотографии с их помощью гарантированы! Материал – ПВХ, наклейка. Возможно изготовление табличек на заказ – с вашим логотипом или хештегами'
        },
    ]

    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/" />} />
            {items.map(elem => <Route path={elem.link} element={
                <section key={elem.link} className={styles.catalog}>
                    <PathNavigate items={['Главная страница', elem.title]} />
                    <Wrapper>
                        <h2 className={styles.title}>{elem.title}</h2>
                        <CatalogContent {...elem} />
                    </Wrapper>
                </section>
            } />)}

        </Routes>
    );
};

export default Catalog;