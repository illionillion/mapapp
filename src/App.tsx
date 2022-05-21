import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { NotFound } from "./components/NotFound";
import { Top } from "./components/Top";
import { FacilityDetail } from "./components/FacilityDetail";
import "./index.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Layout>
          <Routes>
            <Route index element={<Top />} />
            <Route path="*" element={<NotFound />} />
            <Route path="item" element={<FacilityDetail />} />
          </Routes>
        </Layout>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
