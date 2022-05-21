import React from "react";
import MapItem from "./components/MapItem";
import Map from "./components/Map";

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
    <>
      <Map imageURL={require('./map.png')} items={items}/>
    </>
  );
}

export default App;
