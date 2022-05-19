import React from "react";
import MapItem from "./components/MapItem";

const items = [
  {top: '10%',left: '20%',width: '50px',height: '90px',text:'A'},
  {top: '30%',left: '10%',width: '50px',height: '90px',text:'B'},
  {top: '70%',left: '50%',width: '50px',height: '90px',text:'C'},
  {top: '50%',left: '20%',width: '50px',height: '90px',text:'D'},
]
function App() {
  return (
    <>
      {items.map((i,n) => <MapItem dataObj={i} key={n}/>)}
    </>
  );
}

export default App;
