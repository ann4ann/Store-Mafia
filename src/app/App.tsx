import { Route, Routes, Navigate } from "react-router-dom";
import styles from "./App.module.scss";
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
