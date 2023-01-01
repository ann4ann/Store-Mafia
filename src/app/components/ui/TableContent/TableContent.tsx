import { Link } from 'react-router-dom';
import { useFetchCartByIdQuery } from '../../../../services/CartService';
import TableBasket from '../TableBasket/TableBasket';
import styles from './TableContent.module.scss';
import { useEffect, useState } from 'react'

const discount = 100

const TableContent = () => {

    const { data, isLoading, isError } = useFetchCartByIdQuery(1)
    const [price, setPrice] = useState(0)

    useEffect(() => {
        if (data) {
            const allPrice = data[0].items.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            }, 0)
            setPrice(() => allPrice)
        }
    }, [data])

    return <>

        {data && !isLoading ?
            <div className={styles.tableWrapper}>
                <TableBasket {...data[0]} />
                <div className={styles.priceInfo}>
                    <div className={styles.priceInner}>
                        <p className={styles.text}>Скидка</p>
                        <p className={styles.discount}>{discount} ₽</p>
                    </div>
                    <div className={styles.priceInner}>
                        <p className={styles.text}>К оплате</p>
                        <p className={styles.price}>{price - discount}.00 ₽</p>
                    </div>
                </div>

                <div className={styles.btnInner}>
                    <Link to={'/'} className={styles.returnLink}>Продолжить покупки</Link>
                    <button className={styles.btn}>Оформить заказ</button>
                </div>
            </div>
            :
            isError
                ?
                <div>Error</div>
                :
                <div>Loading</div>
        }
    </>

};

export default TableContent;