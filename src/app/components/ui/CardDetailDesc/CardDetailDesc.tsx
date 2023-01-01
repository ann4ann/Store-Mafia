import { useState } from 'react'
import { IProduct } from '../../../../models/IProduct'
import { useFetchCartByIdQuery, useUpdateCartByIdMutation } from '../../../../services/CartService'
import Rating from '../Rating/Rating'
import style from './CardDetailDesc.module.scss'



export const CardDetailDesc: React.FC<IProduct> = (data) => {

    const { data: cart, isLoading } = useFetchCartByIdQuery(1)
    const [updateCartById] = useUpdateCartByIdMutation()

    const [price, setPrice] = useState(data.price)
    const [count, setCount] = useState(1)

    const onClickHandlerInc = () => {
        setPrice(prev => prev + data.price)
        setCount(prev => prev + 1)
    }

    const onClickHandlerDec = () => {
        setPrice(prev => prev - data.price)
        setCount(prev => prev - 1)
    }

    const payProductHandler = async() => {
        if (cart && !isLoading) {
            const item = cart[0].items.find(elem => elem.productId === data.id)

            if (item) {
                const items = cart[0].items.map(elem => {
                    if (elem.productId === data.id) {
                        return { ...elem, quantity: elem.quantity + count }
                    }
                    return elem
                })
                await updateCartById([1, [cart[0], items]])
            }
            else {
                await updateCartById([1, [cart[0], [...cart[0].items, {
                    price: data.price,
                    quantity: count,
                    productId: data.id
                }]]])
            }
            await setCount(1)
        }
    }

    return (
        <div className={style.wrapper}>
            <div className={style.firstDiv}>
                <div className={style.priceInner}>
                    <p className={style.priceText}>Цена</p>
                    <p className={style.price}>{price} ₽</p>
                </div>
                <div className={style.countInner}>
                    <button
                        className={style.btn}
                        disabled={count === 1 ? true : false}
                        onClick={onClickHandlerDec}
                    >-</button>
                    <p className={style.count}>{count} шт.</p>
                    <button className={style.btn} onClick={onClickHandlerInc}>+</button>
                </div>
                <button className={style.btnPay} onClick={() => payProductHandler()}>Купить</button>
                <p className={style.text} >{data.type}</p>
            </div>
            <div className={style.secondDiv}>
                <div className={style.ratingInner}>
                    <Rating value={4} starLength={19} />
                </div>
                <div className={style.textInner}>
                    <p>Арт. U303303303</p>
                    <p>Категория {data.category.name}</p>
                </div>
                <p className={style.description}>
                    Таблички для фотосессий на игре мафия. Материал – ПВХ. Размер 20*30 см.
                    Различные варианты текста. Golden Mafia – качественный
                    реквизит для игры в мафию. Сделано в России.
                </p>
            </div>
        </div>
    )
}