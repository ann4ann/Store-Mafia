import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import BasketPage from "./components/pages/BasketPage/BasketPage";
import Catalog from "./components/pages/Catalog/CatalogNavigate";
import HomePage from "./components/pages/HomePage/HomePage";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";

const App: React.FC = () => {

  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog/*" element={<Catalog />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
