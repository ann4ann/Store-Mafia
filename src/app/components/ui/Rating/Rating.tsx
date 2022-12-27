import { useState } from 'react'
import styles from './Rating.module.scss';

interface IProps {
    statical?: boolean,
    starLength?: number,
    value: number,
    setValue?: any
}

const Rating: React.FC<IProps> = ({ statical = false, starLength, value, setValue }) => {
    const [indexHover, setIndexHover] = useState(value - 1)

    if (!statical) {
        return (
            <div className={styles.ratingInner}>
                <ul className={styles.items}>
                    {[1, 2, 3, 4, 5].map((elem, index) => <li
                        className={styles.itemStatical + ' ' + (index < value ? styles.hover : '')}
                        key={index}>
                        <svg width={starLength || 16} height={starLength || 16} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
                        </svg>
                    </li>)}
                </ul>
            </div>
        )
    }

    const onMouseEnterHandler = (index: number) => {
        setIndexHover(() => index)
    }
    const onMouseLeaveHandler = () => {
        setIndexHover(value - 1)
    }
    const onClickHandler = (index: number) => {
        setValue(() => index + 1)
    }

    return (
        <div className={styles.ratingInner}>
            <ul className={styles.items}>
                {[1, 2, 3, 4, 5].map((elem, index) => <li
                    onMouseEnter={() => onMouseEnterHandler(index)}
                    onMouseLeave={() => onMouseLeaveHandler()}
                    onClick={() => onClickHandler(index)}
                    className={styles.item + ' ' + (indexHover >= index ? styles.hover : '')}
                    key={index}>
                    <svg width={starLength || 16} height={starLength || 16} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
                    </svg>
                </li>)}
            </ul>
        </div>
    );
};

export default Rating;