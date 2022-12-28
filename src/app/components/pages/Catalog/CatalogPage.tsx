import { Route, Routes } from 'react-router-dom';
import CatalogContent from '../../ui/CatalogContent/CatalogContent';
import PathNavigate from '../../ui/PathNavigate/PathNavigate';
import Wrapper from '../../ui/Wrapper/Wrapper';
import CardProductPage from '../CardProductPage/CardProductPage';
import { item } from './CatalogNavigate';
import styles from './CatalogPage.module.scss';

const CatalogPage: React.FC<item> = (elem) => {
    return (
        <Routes>
            <Route path="/" element={
                <section className={styles.catalog}>
                    <PathNavigate items={['Главная страница', elem.title]} />
                    <Wrapper>
                        <h2 className={styles.title}>{elem.title}</h2>
                        <CatalogContent {...elem} />
                        <div className={styles.textInner}>
                            <p className={styles.text}>Рады приветствовать вас в интернет-магазине Mafia-Rekvizit.Ru! У нас вы можете купить разнообразный реквизит для игры в мафию: маски, карты, номерки, скатерти и многое другое. Товары в магазине представлены как в виде отдельных позиций, так и в виде готовых наборов. Необходимый реквизит в нашем каталоге найдут любители классической, спортивной и городской мафии.</p>
                            <p className={styles.text}>Недорогие наборы для игры в мафию, состоящие из карт и пластиковых масок, отлично подойдут для дружеской вечеринки в домашней обстановке или тайм-баре. Если вы открываете маф-клуб или просто планируете игать в мафию по классическим правилам, выбирайте профессиональные наборы. Реквизит в таких наборах рассчитан на более интенсивный режим эксплуатации, а маски на резинках обеспечивают соблюдение правильной «ночной» посадки игроков за столом.</p>
                        </div>
                        {/* <СheckCard/> */}
                    </Wrapper>
                </section>
            } />
            <Route path="*" element={<CardProductPage />} />
        </Routes>

    );
};

export default CatalogPage;