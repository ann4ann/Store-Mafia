import React, { useState } from 'react';
import Wrapper from '../Wrapper/Wrapper';
import styles from './CardDetailDetails.module.scss'
import CardDetailDetailsDescription from './cardDetailDetailsDescription/CardDetailDetailsDescription';
import CardDetailDetailsReviews from './cardDetailDetailsReviews/CardDetailDetailsReviews';
import CardDetailDetailsTop from './cardDetailDetailsTop/CardDetailDetailsTop';

const CardDetailDetails: React.FC = () => {

    const [indexActive, setIndexActive] = useState(0)

    const title = 'Табличка для фотосессий'
    const text = 'Таблички для фотосессий на игре мафия. Материал – ПВХ. Размер 20*30 см. Различные варианты текста. Golden Mafia – качественный реквизит для игры в мафию. Сделано в России.'

    const onClickHandler = (index: number): void => {
        setIndexActive(index)
    }

    return (
        <Wrapper>
            <div className={styles.container}>

                <CardDetailDetailsTop
                    onClickHandler={onClickHandler}
                    indexActive={indexActive}
                />

                {indexActive === 0 ?
                    <CardDetailDetailsDescription title={title} text={text} />
                    :
                    <CardDetailDetailsReviews />
                }

            </div>
        </Wrapper>

    );
};

export default CardDetailDetails;