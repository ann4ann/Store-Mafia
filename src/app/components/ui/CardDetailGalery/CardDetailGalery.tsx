import React, { FC } from 'react';
import style from './CardDetailGalery.module.scss'
import goldenMafia from './goldenMafia.png'
import arrow from './arrow.png'


export const CardDetailGalery: FC = () => {

    return(
        <div className={style.wrapper}>
            <div className={style.mainImg}>
                <div className={style.text}>
                    <span>Новинка</span>
                </div>
                <img src={goldenMafia} alt='' className={style.firstImg} />
            </div>
            <div className={style.secondImg}>
                <img src={goldenMafia} alt='' className={style.secondaryImg} />
                <img src={goldenMafia} alt='' className={style.secondaryImg} />
                <img src={goldenMafia} alt='' className={style.secondaryImg} />
                <button className={style.btn}><img src={arrow} alt='' className={style.arrow} /></button>
            </div>
        </div>
    )
}