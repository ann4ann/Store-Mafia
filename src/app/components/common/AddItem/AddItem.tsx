import React, { useState } from "react"
import style from './AddItem.module.scss'


export const AddItem = () => {
    const [count, setCount] = useState(1)

    const handleDec = () => {
        if(count < 10)
        setCount(count + 1)
    }

    const handleInc = () => {
        if(count !== 0)
        setCount(count - 1)
    }
    
    return(
        <div>
            <button className={style.btn} onClick={ (event:any) => { handleInc() }} >-</button>
            <span>{count} шт. </span>
            <button className={style.btn} onClick={ (event: any) => { handleDec() } } >+</button>
        </div>
    )
}