import React, { useEffect, useState } from "react";
import { FacilityItem } from "./FacilityItem";
import type { Facility } from "../types/facilityItem";
import { useSelector } from "react-redux";
import { AppState } from "../store";

type FacilityRes = Facility & {
  id: number;
};

export const FacilityItemList = (): JSX.Element => {
  const Facilitys = useSelector((state: AppState) => state.FacilityList)
  const sampleObjs = Facilitys.map((data, index) => ({ ...data, id: index }));
  const [inputValue, setInputValue] = useState("");
  const [hitObjs, setHitObjs] = useState<FacilityRes[]>([...sampleObjs]);
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
                  mapPath={obj.clickAreaList[0].photoPath}
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
                  mapPath={obj.clickAreaList[0].photoPath}
                  id={obj.id}
                />
              );
            })}
      </div>
    </div>
  );
};
