import React from 'react';
import styles from './CardDetailDetailsTop.module.scss'

interface IListItem {
    title: string,
}

interface Props {
    indexActive: number,
    onClickHandler: (index: number) => void,
}

const CardDetailDetailsTop: React.FC<Props> = ({indexActive, onClickHandler}) => {

    const reviewsValue: number = 18

    const listItems: IListItem[] = [
        { title: 'Описание' },
        { title: `Отзывы${reviewsValue ? `(${reviewsValue})` : ''}`},
    ]

    return (
        <div className={styles.togleContainer}>
            {listItems.map((elem: IListItem, index: number) => (
                <button
                    key={index}
                    onClick={() => onClickHandler(index)}
                    className={indexActive === index? `${styles.btn} ${styles.active}`:styles.btn}>
                    {elem.title}
                </button>
            ))}
        </div>
    );
};

export default CardDetailDetailsTop;