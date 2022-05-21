import React from "react";
import MapItem from "./components/MapItem";
import Map from "./components/Map";

const items = [
  {coords: '100,400, 390,500', text:'バルコニー'},
  // ↓div使ってた時の
  // {top: '88%',left: '20%',width: '280px',height: '50px',text:'バルコニー'},
  // {top: '10%',left: '20%',width: '50px',height: '90px',text:'A'},
  // {top: '30%',left: '10%',width: '50px',height: '90px',text:'B'},
  // {top: '70%',left: '50%',width: '50px',height: '90px',text:'C'},
  // {top: '50%',left: '20%',width: '50px',height: '90px',text:'D'},
]
function App() {
  return (
    <>
      <Map imageURL={'https://illionillion.github.io/map_test/map.jpg'} items={items}/>
    </>
  );
}

export default App;
