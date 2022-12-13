import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import styles from './PathNavigate.module.scss'

interface IProps {
    items: string[]
}

const PathNavigate: React.FC<IProps> = ({ items }) => {

    return items.length > 1 ? (
        <div className={styles.pathNavigate}>
            <Wrapper>
                <ul className={styles.list}>
                    {items.map((elem, index) => <li
                        key={index}
                        className={ index + 1 === items.length? styles.item :styles.item + ' ' + styles.item_point }
                    >{elem}</li>)}
                </ul>
            </Wrapper>
        </div>
    ) : <></>
};

export default PathNavigate;