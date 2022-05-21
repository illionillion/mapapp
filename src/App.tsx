import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { NotFound } from "./components/NotFound";
import { Top } from "./components/Top";
import MapItem from "./components/MapItem";
import Map from "./components/Map";
import "./index.css";

const items = [
  {coords: '0,474,479,414', text:'バルコニー'},
  {coords: '406,299,478,415', text:'CL'},
  {coords: '10,196,403,414', text:'洋室'},
  {coords: '479,292,408,196', text:'トイレ'},
  {coords: '356,74,474,188', text:'浴槽'},
  {coords: '230,71,349,190', text:'洗面所'},
  {coords: '224,195,155,67', text:'玄関'},
  {coords: '4,69,150,196', text:'キッチン'},
]

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Layout>
          <Routes>
            <Route index element={<Top />} />
            <Route path="*" element={<NotFound />} />
            <Route path="" element={<Map imageURL={require('./map.png')} items={items}/>} />
          </Routes>
        </Layout>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
