import React from "react";
import { IReview } from "../../../../../models/IReview";
import styles from "./CardInfoReviews.module.scss";
import FieldGroup from "./fieldGroup/FieldGroup";
import ReviewsList from "./reviewsList/ReviewsList";

interface IProps {
  reviews: IReview[],
  limit: number
  setLimit: (limit: number) => void,
  reviewsLength: number | undefined,
  productId: number,
}

const CardInfoReviews: React.FC<IProps> = ({ reviews, limit, setLimit, reviewsLength = 0, productId }) => {

  const onClickHandler = () => {
    setLimit(limit + 2)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {reviews.length > 0 ?
          <>
            <ul className={styles.reviewsList}>
              {reviews.map((elem: IReview, index: number) => (
                <ReviewsList key={index} {...elem} />
              ))}
            </ul>
            {!(reviewsLength === reviews.length) &&
              <button
                className={styles.more}
                onClick={onClickHandler}>
                Показать еще отзывы
              </button>
            }
          </>
          :
          <div>Отзывов нет</div>
        }

      </div>

      <FieldGroup productId={productId}/>
    </div>
  );
};

export default CardInfoReviews;
