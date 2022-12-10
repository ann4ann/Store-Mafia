import { useState } from "react";
import styles from './DiscountFooter.module.scss';

const DiscountFooter: React.FC = () => {

    const [value, setValue] = useState<string>('')

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value) 
    }

    const onClickHandler = () => {
        console.log(value)
        setValue('')
    }

    return (
        <div className={styles.discountFooter}>

            <form className={styles.form} onSubmit={e => e.preventDefault()}>
                <h4>Скидка 10% на первую покупку за подписку</h4>
                <div className={styles.formInner}>
                    <input type="text" placeholder='Email' value={value} onChange={e => onChangeHandler(e)} />
                    <button onClick={onClickHandler}>Подписаться</button>
                </div>
            </form>

            <h5 className={styles.text}>
                Нажимая кнопку “Подписаться” вы соглашаетесь с <a href="#">Политикой конфиденциальности</a> сайта
            </h5>
        </div>
    );
};

export default DiscountFooter;