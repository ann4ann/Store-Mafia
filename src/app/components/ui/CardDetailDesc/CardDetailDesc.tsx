import React, {FC, useState} from 'react'
import style from './CardDetailDesc.module.scss'


export const CardDetailDesc: FC = () => {
    const data = {
        text: 'Цена',
        money: ' ₽',
        status: 'Заканчивается',
        article: 'Арт. U303303303',
        category: 'Категория Таблички',
        description: 'Таблички для фотосессий на игре мафия. Материал – ПВХ. Размер 20*30 см. Различные варианты текста. Golden Mafia – качественный реквизит для игры в мафию. Сделано в России.'
    }

    const [count, setCount] = useState(1)

    const increment = () => {
        if(count < 10)
        setCount(count + 1)
    }

    const decrement = () => {
        if(count !== 0)
        setCount(count - 1)
    }

    const [price, setPrice] = useState(590)

    const incPrice = () => {
        if(price !== 5900)
        setPrice(price + 590)
    }

   const decPrice = () => {
        if(price !== 0)
        setPrice(price - 590)
   }


    return(
        <div className={style.wrapper}>
            <div className={style.firstDiv}>
                <p>{data.text}</p>
                <p>{price} {data.money}</p>
                <button onClick={ (event:any) => {decrement()
                decPrice() } } className={style.minus} >-</button>
                <p>{count} шт.</p>
                <button onClick={ (event:any) => {
                    increment()
                    incPrice() }} className={style.plus}>+</button>
                <input type='submit' value='Купить' />
                <span>{data.status}</span>
            </div>
            <div className={style.secondDiv}>
                
                <div>{data.article}</div>
                <div>{data.category}</div>
                <p>{data.description}</p>
            </div>
        </div>
    )
}