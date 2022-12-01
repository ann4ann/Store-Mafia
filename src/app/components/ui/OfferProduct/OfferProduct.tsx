import React, { useState, useEffect } from 'react';
import styles from './OfferProduct.module.scss'
import bgItem from './bgItem.jpg'

interface IItem {
    img: string
}

const OfferProduct: React.FC = () => {

    const items: IItem[] = [
        { img: bgItem },
        { img: bgItem },
        { img: bgItem },
    ]

    const [toggleIndex, setToggleIndex] = useState(0)
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setToggleIndex(() => {
                if (toggleIndex === items.length - 1) {
                    setOffset(0)
                    return 0
                }
                else {
                    setOffset(offset - 966)
                }
                return toggleIndex + 1
            })

        }, 5000)

        return () => clearInterval(interval)

    }, [offset, toggleIndex, items.length])


    const onClickHandler = (index: number): void => {
        setToggleIndex(index)
        setOffset(-966 * index)
    }

    return (
        <div className={styles.carousel}>
            <div className={styles.window}>
                <ul className={styles.allPagesContainer} style={{
                    transform: `translateX(${offset}px)`
                }}>
                    {items.map((elem: IItem, index: number) => <li
                        key={index}
                        className={styles.item}
                        style={{backgroundImage: `url(${elem.img})`}}
                    ></li>)}
                </ul>
                <ul className={styles.toggleContainer}>
                    {items.map((_, index) => <li
                        key={index}
                        onClick={() => onClickHandler(index)}
                        className={index === toggleIndex
                            ? `${styles.toggle} ${styles.toggleActive}`
                            : styles.toggle}>
                    </li>)}
                </ul>
            </div>
        </div>
    );
};

export default OfferProduct;