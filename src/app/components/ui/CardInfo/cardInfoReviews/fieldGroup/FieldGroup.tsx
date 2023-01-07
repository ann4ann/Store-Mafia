import React, { useState } from 'react';
import { useCreateReviewMutation } from '../../../../../../services/ReviewService';
import Rating from '../../../Rating/Rating';
import SacsesReview from '../../../SacsesReview/SacsesReview';
import TextField from '../../../TextField/TextField';
import styles from './FieldGroup.module.scss'

interface IInputItem {
    title: string,
    value: string,
    setValue: (prevState: string) => void,
}

const FieldGroup: React.FC<{ productId: number }> = ({ productId }) => {
    const [createReview, { isLoading, isError }] = useCreateReviewMutation()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')
    const [visible, setVisible] = useState(false)
    const [rating, setRating] = useState(5)
    const [error, setError] = useState(false)

    const inputList: IInputItem[] = [
        { title: 'Имя', value: name, setValue: setName },
        { title: 'E-mail', value: email, setValue: setEmail },
        { title: 'Ваш комментарий', value: comment, setValue: setComment }
    ]

    const onClickHandler = async () => {
        setError(false)
        if (name !== '' && email !== '' && comment !== '') {
            await createReview({
                name,
                productId,
                email,
                rate: rating,
                text: comment,
            })
            setName('')
            setEmail('')
            setComment('')
            setRating(0)
            if (!isLoading && !isError) {
                setVisible(true)
            }
        }
        else {
            setError(true)
        }
    }

    return (
        <>
            {visible && <SacsesReview title='Ваш отзыв отправлен' setVisible={setVisible} />}
            <form className={styles.form} onSubmit={e => e.preventDefault()}>
                {inputList.map((elem: IInputItem) => (
                    <TextField
                        key={elem.title}
                        {...elem}
                    />
                ))}
                <div className={styles.ratingInner}>
                    <Rating starLength={32} value={rating} setValue={setRating} statical />
                </div>
                <button onClick={onClickHandler} className={styles.btn}>Отправить</button>
                {error && <div className={styles.error}>Заполните все поля</div>}
            </form>
        </>

    );
};

export default FieldGroup;