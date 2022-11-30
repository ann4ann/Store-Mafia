import React from 'react';
import styles from './CardDetailDetailsReviews.module.scss'
import ReviewsForm from './reviewsForm/ReviewsForm';
import ReviewsItem from './reviewsItem/ReviewsItem';

interface IReviewsItem {
    name: string,
    text: string
}

const CardDetailDetailsReviews: React.FC = () => {

    const reviewsItems: IReviewsItem[] = [
        {
            name: 'Гость',
            text: 'Отличный подарок! Меломанам и не очень посвящается) А так же любителям звука, гаджетов и просто почитать аудиокниги в полной изоляции от внешнего мира! '
        },
        {
            name: 'Вадим',
            text: 'Отличный подарок! Меломанам и не очень посвящается) А так же любителям звука, гаджетов и просто почитать аудиокниги в полной изоляции от внешнего мира! '
        },
    ]

    return (
        <div className={styles.wrapper}>
            <div>
                <ul className={styles.reviewsList}>
                    {reviewsItems.map((elem: IReviewsItem, index: number) => (
                        <ReviewsItem key={index} {...elem} />
                    ))}
                </ul>
                <button className={styles.more}>Показать еще отзывы</button>
            </div>

            <ReviewsForm />

        </div>
    );
};

export default CardDetailDetailsReviews;