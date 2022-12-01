import React from 'react';
import styles from './ReviewsItem.module.scss'

interface Props {
    name: string,
    text: string
}

const ReviewsItem: React.FC<Props> = ({ name, text }) => {
    return (
        <li className={styles.reviewsItem}>
            <div className={styles.titleWrapper}>
                <h4 className={styles.title}>{name}</h4>
                <div className={styles.rating}>rating</div>
            </div>
            <p className={styles.text}>{text}</p>
        </li>
    );
};

export default ReviewsItem;