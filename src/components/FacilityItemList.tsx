import React, { useEffect, useState } from "react";
import { FacilityItem } from "./FacilityItem";
import type {Facility} from "../types/facilityItem"
import data from "../data/sample.json";


type FacilityRes = Facility & {
    id: string
}

const sampleObj1:FacilityRes = {
  ...data,
  id:'1'
};
const sampleObj2:FacilityRes = {
  ...data,
  id:'2'
};
const sampleObj3:FacilityRes = {
  ...data,
  id:'3'
};

const sampleObjs = [sampleObj1, sampleObj2, sampleObj3];



export const FacilityItemList = (): JSX.Element => {
  const [inputValue, setInputValue] = useState("");
  const [hitObjs, setHitObjs] = useState([{ name: "", text: "", mapPath: "" ,id:""}]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  console.log(sampleObjs)
 

  useEffect(() => {
    const newHitObjs = sampleObjs.filter((obj) =>
      obj.name.includes(inputValue)
    );
    setHitObjs(newHitObjs);
  }, [inputValue]);

  
  return (
    <div className="py-12 ">
      <div className="flex  md:justify-start justify-center flex-col md:flex-row items-center gap-8">
        <h2 className="text-3xl md:text-start text-center">施設一覧</h2>
        <input
          type="text"
          placeholder="施設名から検索"
          value={inputValue}
          onChange={handleChange}
          className="border-0 px-4 py-2 block  w-64"
        ></input>
      </div>

      <div className="h-screen overflow-scroll">
        {inputValue === ""
          ? sampleObjs.map((obj, index) => {
              return (
                <FacilityItem
                  key={index}
                  name={obj.name}
                  text={obj.text}
                  mapPath={obj.mapPath}
                  id={obj.id}
                />
              );
            })
          : hitObjs.map((obj, index) => {
              return (
                <FacilityItem
                  key={index}
                  name={obj.name}
                  text={obj.text}
                  mapPath={obj.mapPath}
                  id={obj.id}
                />
              );
            })}
      </div>
    </div>
  );
};
