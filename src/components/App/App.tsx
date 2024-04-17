import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "components/Header";
import Footer from "components/Footer";
import Home from "components/Home";
import Business from "components/Business";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/company" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
