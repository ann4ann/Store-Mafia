import React from 'react';
import { IReview } from '../../../../../../models/IReview';
import Rating from '../../../Rating/Rating';
import styles from './ReviewsList.module.scss'

const ReviewsList: React.FC<IReview> = (props) => {
    return (
        <li className={styles.reviewsItem}>
            <div className={styles.titleWrapper}>
                <h4 className={styles.title}>{props.name}</h4>
                <Rating value={props.rate}/>
            </div>
            <p className={styles.text}>{props.text}</p>
        </li>
    );
};

export default ReviewsList;