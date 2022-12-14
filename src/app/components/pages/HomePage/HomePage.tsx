import SectionWrapper from "../../common/SectionWrapper/SectionWrapper";
import Title from "../../common/typografy/Title";
import CardsGallery from "../../ui/CardsGallery/CardsGallery";
import OfferProduct from "../../ui/OfferProduct/OfferProduct";
import SaleCard from "../../ui/SaleCard/SaleCard";
import Sidebar from "../../ui/Sidebar/Sibebar";
import TableBasket from "../../ui/TableBasket/TableBasket";
import Wrapper from "../../ui/Wrapper/Wrapper";
import styles from "./HomePage.module.scss";
import { useEffect } from 'react'

const HomePage: React.FC = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [])

  return (
    <div className={styles.homePage}>
      <Wrapper>
        {/* Delete!!! */}
        {/* <SectionWrapper mix="vertical-small">
          <TableBasket />
        </SectionWrapper> */}
        {/* Delete!!! */}
        <SectionWrapper mix="horizontal-small">
          <Sidebar />
          <OfferProduct />
        </SectionWrapper>

        <SectionWrapper mix="vertical-large">
          <CardsGallery itemsCount={4} category="masks" />
        </SectionWrapper>

        <SectionWrapper mix="vertical-large">
          <CardsGallery itemsCount={4} category="kit" />
        </SectionWrapper>

        <SectionWrapper mix="horizontal-large">
          <SaleCard title="Маска для мафии “Чикаго”" price={590} />
          <SaleCard title="Маска для мафии “Чикаго”" price={590} />
        </SectionWrapper>

        <SectionWrapper mix="vertical-large">
          <CardsGallery itemsCount={4} category="kit" />
        </SectionWrapper>

        <SectionWrapper mix="vertical-medium">
          <Title>Тут должен быть заголовок</Title>
          <p>
            Рады приветствовать вас в интернет-магазине Mafia-Rekvizit.Ru! У нас
            вы можете купить разнообразный реквизит для игры в мафию: маски,
            карты, номерки, скатерти и многое другое. Товары в магазине
            представлены как в виде отдельных позиций, так и в виде готовых
            наборов. Необходимый реквизит в нашем каталоге найдут любители
            классической, спортивной и городской мафии.
          </p>
          <p>
            Недорогие наборы для игры в мафию, состоящие из карт и пластиковых
            масок, отлично подойдут для дружеской вечеринки в домашней
            обстановке или тайм-баре. Если вы открываете маф-клуб или просто
            планируете игать в мафию по классическим правилам, выбирайте
            профессиональные наборы. Реквизит в таких наборах рассчитан на более
            интенсивный режим эксплуатации, а маски на резинках обеспечивают
            соблюдение правильной «ночной» посадки игроков за столом.
          </p>
          <p>
            Реквизит для мафии в интернет-магазине Mafia-Rekvizit.Ru вы можете
            приобрести в технической упаковке, если хотите сэкономить при
            покупке. А за небольшую доплату мы отправляем его в красивой
            подарочной упаковке.
          </p>
          <p>
            Большую часть реквизита, представленного в магазине, мы производим
            самостоятельно. Поэтому наш товар всегда есть в наличии. Любой
            реквизит или набор для игры в мафию из нашего каталога может быть
            адаптирован под ваши требования и изготовлен на заказ. Если вам
            нужен реквизит с вашим логотипом, из определенных материалов или
            определенного размера, обращайтесь — сделаем!
          </p>
          <p>
            Также в нашем магазине представлена различная сувенирная продукция
            мафиозной тематики: ручки, значки, кружки, майки и т. д. Доставку
            производим по России и странам СНГ!
          </p>
        </SectionWrapper>
      </Wrapper>
    </div>
  );
};

export default HomePage;
