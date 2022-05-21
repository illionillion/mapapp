import React, { useEffect, useState } from "react";
import { FacilityItem } from "./FacilityItem";
const sampleText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, vel vitae? Repellendus harum vel laborum reiciendis voluptas sequi eius quaerat saepe quis velit mollitia veritatis ea ad ratione cum molestiae doloremque, pariatur maxime qui dignissimos? Iure, sequi minima ullam ea numquam obcaecati? Ab, vitae iste voluptatibus repellat eum quisquam culpa similique suscipit distinctio et, animi temporibus obcaecati beatae consequuntur! Quas sequi nam atque, aperiam voluptates, temporibus maxime cum nihil recusandae necessitatibus neque labore quo impedit ducimus. Ut quaerat incidunt voluptatibus, reiciendis quo quod suscipit. Dolores quaerat quia doloribus libero distinctio sint, nihil porro expedita provident velit nobis perspiciatis, a dolorum?";

const sampleObj1 = {
  name: "サンプル施設名1",
  text: sampleText,
  mapPath: "#",
};

const sampleObj2 = {
  name: "サンプル施設名2",
  text: sampleText,
  mapPath: "#",
};

const sampleObj3 = {
  name: "サンプル施設名3",
  text: sampleText,
  mapPath: "#",
};

const sampleObjs = [sampleObj1, sampleObj2,sampleObj3];

export const FacilityItemList = (): JSX.Element => {
  const [inputValue, setInputValue] = useState("");
  const [hitObjs, setHitObjs] = useState([
    { name: "", text: "" , mapPath: "" },
  ]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const newHitObjs = sampleObjs.filter(obj => obj.name.includes(inputValue)) 
    setHitObjs(newHitObjs);
    console.log();
  },[inputValue])

  return (
    <div className="py-12 ">
      <h2 className="text-3xl">施設一覧</h2>
      <input
        type="text"
        placeholder="施設名から検索"
        value={inputValue}
        onChange={handleChange}
      ></input>
      <div className="h-screen overflow-scroll">
        {inputValue === ""
          ? sampleObjs.map((obj, index) => {
              return (
                <FacilityItem
                  key={index}
                  name={obj.name}
                  text={obj.text}
                  mapPath={obj.mapPath}
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
                />
              );
            })}
      </div>
    </div>
  );
};
