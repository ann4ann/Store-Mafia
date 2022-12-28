import { useFetchProductByCategoryQuery } from '../../../../services/ProductService';
import CardItem from '../Card';
import Sidebar from '../Sidebar/Sibebar';
import styles from './CatalogContent.module.scss'

interface IProps {
    link: string,
    discription: string,
    title: string
}

const CatalogContent: React.FC<IProps> = ({ link, discription, title }) => {

    const { data, isLoading } = useFetchProductByCategoryQuery([4, link])

    return (
        <div className={styles.inner}>
            <Sidebar link={link} />
            <div className={styles.container}>
                <div className={styles.sortInner}>sort</div>
                <p className={styles.discription}>{discription}</p>
                {isLoading ?
                    <>loading</>
                    : (data && data.length > 0
                        ?
                        <ul className={styles.list}>
                            {data?.map((elem, index) => <li key={index} className={styles.listItem}>
                                <CardItem {...elem}/>
                                </li>)}
                        </ul>
                        :
                        <div>нет элементов</div>
                    )
                }


            </div>
        </div>
    );
};

export default CatalogContent;