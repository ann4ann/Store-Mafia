import SectionWrapper from "../../common/SectionWrapper/SectionWrapper";
import Title from "../../common/typografy/Title";
import CardsGallery from "../../ui/CardsGallery/CardsGallery";
import OfferProduct from "../../ui/OfferProduct/OfferProduct";
import SaleCard from "../../ui/SaleCard/SaleCard";
import Sidebar from "../../ui/Sidebar/Sibebar";
import Wrapper from "../../ui/Wrapper/Wrapper";
import styles from "./HomePage.module.scss";
import { useCallback, useEffect, useState } from "react";

// НЕ работает - обращается к серверу 3000 даже с прокси 5001

// << FORM FOR LOADING IMG
import logo from "../../ui/Header/HeaderLogo/mafia.png";
import axios from "axios";
// FORM FOR LOADING IMG >>

const HomePage: React.FC = () => {
  // << FORM FOR LOADING IMG
  const [img, setImg] = useState<string | File>(logo);
  const [avatar, setAvatar] = useState<string | File>(logo);

  const sendFile = useCallback(async () => {
    try {
      const data = new FormData();
      data.append("avatar", img);
      await axios
        .post("/api/upload", data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          setAvatar(res.data.path);
        });
      console.log("good");
    } catch (err) {
      console.log(err);
    }
  }, [img]);

  // также в package.json добавили  "proxy": "http://localhost:5001/",
  // FORM FOR LOADING IMG >>

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className={styles.homePage}>
      <Wrapper>
        {/* << FORM FOR LOADING IMG */}
        <div>
          {avatar ? (
            <img src={`${avatar}`} alt="avatar" />
          ) : (
            <img src={`${logo}`} alt="avatar" />
          )}
        </div>
        <input
          type="file"
          onChange={(e) => setImg(e.target.files ? e.target.files[0] : logo)}
        />
        <button onClick={sendFile}>добавить</button>
        {/* FORM FOR LOADING IMG >> */}

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
