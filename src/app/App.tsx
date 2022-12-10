import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import HomePage from "./components/pages/HomePage/HomePage";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
function App() {

  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
