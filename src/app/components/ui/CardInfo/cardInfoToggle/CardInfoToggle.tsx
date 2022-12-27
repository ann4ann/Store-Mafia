import React from 'react';
import styles from './CardInfoToggle.module.scss'

interface IListItem {title: string}

interface Props {
    indexActive: number,
    onClickHandler: (index: number) => void,
    reviewsLength: number
}

const CardInfoToggle: React.FC<Props> = ({ indexActive, onClickHandler, reviewsLength }) => {

    const listItems: IListItem[] = [
        { title: 'Описание' },
        { title: `Отзывы${reviewsLength ? `(${reviewsLength})` : ''}` },
    ]

    return (
        <div className={styles.toggleContainer}>
            {listItems.map((elem: IListItem, index: number) => (
                <button
                    key={index}
                    onClick={() => onClickHandler(index)}
                    className={indexActive === index ? `${styles.btn} ${styles.active}` : styles.btn}>
                    {elem.title}
                </button>
            ))}
        </div>
    );
};

export default CardInfoToggle;