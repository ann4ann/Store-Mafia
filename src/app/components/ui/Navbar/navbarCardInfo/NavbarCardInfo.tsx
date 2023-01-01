import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetchCartByIdQuery } from '../../../../../services/CartService';
import styles from './NavbarCardInfo.module.scss'

const NavbarCardInfo: React.FC = () => {

    const { data } = useFetchCartByIdQuery(1)
    const [price, setPrice] = useState(0)

    useEffect(() => {
        if (data) {
            const allPrice = data[0].items.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            }, 0)
            setPrice(() => allPrice)
        }
    }, [data])

    return (
        <div className={styles.cardInfo}>
            <Link to={'/basket'}>
                <div className={styles.svgInner}>
                    {(data? data[0].items.length: 0) !== 0 &&
                        <div className={styles.busketValue}>
                            {(data? data[0].items.length: 0) || 0}
                        </div>
                    }
                    <svg className={styles.basketIcon} width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.0917 7.89236L12.4495 1.00805C12.2385 0.799436 11.922 0.59082 11.6055 0.59082C11.289 0.59082 10.9725 0.695128 10.7615 1.00805L6.11927 7.89236H1.05505C0.422018 7.89236 0 8.30959 0 8.93544V9.24836L2.63761 18.949C2.84862 19.7834 3.69266 20.5136 4.6422 20.5136H18.3578C19.3073 20.5136 20.1514 19.8877 20.3624 18.949L23 9.24836V8.93544C23 8.30959 22.578 7.89236 21.945 7.89236H17.0917ZM8.44043 7.89217L11.6056 3.30263L14.7707 7.89217H8.44043ZM9.49536 14.1504C9.49536 15.2978 10.4449 16.2366 11.6055 16.2366C12.766 16.2366 13.7155 15.2978 13.7155 14.1504C13.7155 13.003 12.766 12.0643 11.6055 12.0643C10.4449 12.0643 9.49536 13.003 9.49536 14.1504Z" fill="white" />
                    </svg>
                </div>
            </Link>

            <div className={styles.infoInner}>
                <p className={styles.title}>Корзина</p>
                <p className={styles.sumValue}>{price} руб.</p>
            </div>
        </div>
    );
};

export default NavbarCardInfo;