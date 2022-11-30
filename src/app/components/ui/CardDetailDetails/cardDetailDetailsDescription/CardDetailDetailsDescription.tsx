import React from 'react';
import styles from './CardDetailDetailsDescription.module.scss'

interface Props {
    title: string,
    text: string
}

const CardDetailDetailsDescription: React.FC<Props> = ({title, text}) => {
    return (
        <div className={styles.descriptionContainer}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
        </div>
    );
};

export default CardDetailDetailsDescription;