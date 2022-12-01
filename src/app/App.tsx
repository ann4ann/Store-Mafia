import React from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import HomePage from "./components/pages/HomePage/HomePage";
import Header from "./components/ui/Header/Header";
function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
