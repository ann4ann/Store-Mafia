import React, { FormEvent, useState } from 'react';
import styles from './ReviewsForm.module.scss'

interface IInputItem {
    title: string,
    value: string,
    setValue: (e: FormEvent<HTMLInputElement>) => void
}

const ReviewsForm = () => {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

    const setFullNameValue = (event: FormEvent<HTMLInputElement>) => {
        setFullName(event.currentTarget.value)
    }

    const setEmailValue = (event: FormEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value)
    }

    const setCommentValue = (event: FormEvent<HTMLInputElement>) => {
        setComment(event.currentTarget.value)
    }

    const inputList: IInputItem[] = [
        { title: 'ФИО', value: fullName, setValue: setFullNameValue },
        { title: 'E-mail', value: email, setValue: setEmailValue },
        { title: 'Ваш комментарий', value: comment, setValue: setCommentValue }
    ]


    const onClickHandler = () => {
        console.log('click')
        setFullName('')
        setEmail('')
        setComment('')
    }

    return (
        <form className={styles.form} onSubmit={e => e.preventDefault()}>
            {inputList.map((elem: IInputItem) => (
                <div key={elem.title} className={styles.inputInner}>
                    <p className={styles.title}>{elem.title}</p>
                    <input value={elem.value} onChange={(e) => elem.setValue(e)} className={styles.input} type="text" />
                </div>
            ))}

            <button onClick={onClickHandler} className={styles.btn}>Отправить</button>
        </form>
    );
};

export default ReviewsForm;