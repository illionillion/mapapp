import React, { useEffect, useState } from "react";
import { FacilityItem } from "./FacilityItem";
import type {Facility} from "../types/facilityItem"
import datas from "../data/sample2.json";


type FacilityRes = Facility & {
    id: number
}

const sampleObjs = datas.map((data,index) => ({...data,id:index}));


export const FacilityItemList = (): JSX.Element => {
  const [inputValue, setInputValue] = useState("");
  const [hitObjs, setHitObjs] = useState([{ name: "", text: "", mapPath: "" ,id:0}]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

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
