import React, { useEffect, useState } from "react";
import { } from "../../../../models/IReview";
import { useFetchReviewsQuery, useLazyFetchReviewsLimitQuery } from "../../../../services/ReviewService";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./CardInfo.module.scss";
import CardInfoDescription from "./cardInfoDescription/CardInfoDescription";
import CardInfoReviews from "./cardInfoReviews/CardInfoReviews";
import CardInfoToggle from "./cardInfoToggle/CardInfoToggle";


interface IProps {
  id: number,
  name: string,
  desc: string,
}

const CardInfo: React.FC<IProps> = (props) => {
  const { data } = useFetchReviewsQuery(props.id)
  const [fetchReviews, { data: reviews, isLoading }] = useLazyFetchReviewsLimitQuery()

  const [limit, setLimit] = useState(2)
  const [indexActive, setIndexActive] = useState(0);

  const onClickHandler = (index: number) => {
    setIndexActive(index);
  };

  useEffect(() => {
    (async () => await fetchReviews([limit, props.id]))()
  }, [limit, props, fetchReviews])

  return (
    <>
      {!isLoading
        ?
        <div className={styles.container}>
          <CardInfoToggle
            onClickHandler={onClickHandler}
            indexActive={indexActive}
            reviewsLength={data?.length || 0}
          />
          {indexActive === 0
            ?
            <CardInfoDescription title={props.name} text={props.desc} />
            :
            <CardInfoReviews
              reviews={reviews || []}
              limit={limit}
              setLimit={setLimit}
              reviewsLength={data?.length}
              productId={props.id}
            />
          }
        </div>
        :
        <div>loading</div>
      }
    </>
  );
};

export default CardInfo;
