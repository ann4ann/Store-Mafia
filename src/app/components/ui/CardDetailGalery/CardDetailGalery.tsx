import { FC, useState } from 'react';
import style from './CardDetailGalery.module.scss'
import goldenMafia from './goldenMafia.png'

interface IProps {
    img: string[]
}

export const CardDetailGalery: FC<IProps> = ({ img }) => {

    const [activeImg, setActiveImg] = useState(img[1])
    const [translate, setTranslate] = useState(0)
    const [index, setIndex] = useState(1)

    const onClickHandler = () => {
        if (index === img.length - 2) {
            setTranslate(0)
            setIndex(1)
        }
        else {
            setTranslate(-168 * index)
            setIndex(index + 1)
        }
    }

    return (
        <div>
            <div className={style.mainImg}>
                <div className={style.text}>
                    {/* <span>{type}</span> */}
                </div>
                <img src={activeImg} alt='cardImg' className={style.firstImg} />
            </div>
            <div className={style.galeryInner}>
                <div className={style.secondImg}>
                    <ul className={style.items} style={{ transform: `translateX(${translate}px)` }}>
                        {img.map((elem, index) => (
                            <li key={index} className={style.item}>
                                <img
                                    src={elem}
                                    alt='cardImg'
                                    className={style.secondaryImg}
                                    onClick={() => setActiveImg(img[index])}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                {img.length > 3
                    &&
                    <button className={style.btn} onClick={onClickHandler}>
                        <svg width="13" height="6" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.2346 5.8934L12.9013 3.5824C12.9476 3.53897 12.9707 3.48689 12.9707 3.42608C12.9707 3.36958 12.9476 3.31972 12.9013 3.27635L10.2346 0.997984C10.1604 0.941553 10.0795 0.930677 9.99148 0.965357C9.90352 1.0001 9.85954 1.06301 9.85954 1.15414V2.61232H1.19268C1.12791 2.61232 1.07464 2.63181 1.03302 2.67091C0.9915 2.70997 0.970703 2.75981 0.970703 2.82064V4.07047C0.970703 4.13132 0.9915 4.18125 1.03302 4.22011C1.07466 4.25912 1.12791 4.27877 1.19268 4.27877H9.85954V5.73694C9.85954 5.82372 9.90355 5.88658 9.99148 5.92559C10.0796 5.96048 10.1605 5.94958 10.2346 5.8934Z" fill="#D93C47" />
                        </svg>
                    </button>
                }

            </div>

        </div >
    )
}