import Sidebar from '../Sidebar/Sibebar';
import styles from './CatalogContent.module.scss'

interface IProps {
    link: string,
    discription: string,
    title: string
}

const CatalogContent: React.FC<IProps> = ({ link, discription, title }) => {
    return (
        <div className={styles.inner}>
            <Sidebar link={link} />
            <div className={styles.container}>
                <div className={styles.sortInner}>sort</div>
                <p className={styles.discription}>{discription}</p>
                <ul className={styles.list}>
                    <li className={styles.listItem}></li>
                    <li className={styles.listItem}></li>
                    <li className={styles.listItem}></li>
                    <li className={styles.listItem}></li>
                    <li className={styles.listItem}></li>
                    <li className={styles.listItem}></li>
                    <li className={styles.listItem}></li>
                </ul>
            </div>
        </div>
    );
};

export default CatalogContent;