
import { useLocation } from 'react-router-dom'
import { useFetchProductByIdQuery } from '../../../../services/ProductService';
import { CardDetailDesc } from '../../ui/CardDetailDesc/CardDetailDesc';
import { CardDetailGalery } from '../../ui/CardDetailGalery/CardDetailGalery';
import CardInfo from '../../ui/CardInfo/CardInfo';
import CardsGallery from '../../ui/CardsGallery/CardsGallery';
import PathNavigate from '../../ui/PathNavigate/PathNavigate';
import Wrapper from '../../ui/Wrapper/Wrapper';
import styles from './CardProductPage.module.scss';
import { useEffect } from 'react'

const CardProductPage: React.FC = () => {

    const { data, isError, isLoading } = useFetchProductByIdQuery(useLocation().pathname.split('/').reverse()[0])

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [useLocation().pathname])

    return (
        <section className={styles.cardProductPage}>
            {data && !isLoading
                ?
                <>
                    <PathNavigate items={['Главная страница', data.category.name, data.name]} />
                    <Wrapper>
                        <h2 className={styles.title}>{data.name}</h2>
                        <div className={styles.cardDetails}>
                            <CardDetailGalery type={data.type} img={data.img} />
                            <CardDetailDesc {...data} />
                        </div>
                        {/* <CardInfo {...data} /> */}
                        <div className={styles.cardsGalleryInner}>
                            <CardsGallery title='Похожие товары' category={data.category.category} itemsCount={4} />
                        </div>
                    </Wrapper>
                </>
                : (isError
                    ?
                    <div className={styles.title + ' ' + styles.Error}>Error</div>
                    :
                    <div className={styles.title + ' ' + styles.Loading}>Loading...</div>
                )
            }

        </section >
    );
};

export default CardProductPage;