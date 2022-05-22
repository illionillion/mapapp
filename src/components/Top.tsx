import React, { useState } from "react";
import { About } from "./About";
import { FacilityItemList } from "./FacilityItemList";
import useInterval from 'use-interval';
import Facility from "../data/sample.json";
import { ImgChanger } from "./ImgChanger";
import { ClickArea } from "../types/facilityItem"


export const Top = ():JSX.Element => {
  
  const [count ,setCount] = useState(0)
  const objList = Facility.clickAreaList
  const [tarObj, setTarObj] = useState<ClickArea>(objList[0])
  
  
  useInterval(() => {
    setCount(count+1)
    setTarObj(objList[count%objList.length])
  }, 5000);

  return (
    <div>
      <About/>
      <FacilityItemList/>
    </div>
  );
};
