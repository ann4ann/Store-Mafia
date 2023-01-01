import PathNavigate from '../../ui/PathNavigate/PathNavigate';
import Wrapper from '../../ui/Wrapper/Wrapper';
import styles from './BasketPage.module.scss';
import { useEffect } from 'react'
import TableContent from '../../ui/TableContent/TableContent';

const BasketPage = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [])

    return (
        <section className={styles.basketPage}>
            <PathNavigate items={['Главная страница', 'Корзина']} />
            <Wrapper>
                <h2 className={styles.title}>Корзина</h2>
                <TableContent />
            </Wrapper>

        </section>
    );
};

export default BasketPage;