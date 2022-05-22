import React from "react";
import {ClickArea} from "../types/facilityItem"

interface Props {
  tarObj:ClickArea;
}
export const ImgChanger = ({ tarObj }: Props) => {

  return (
      <div className="h-screen">
          <div>{tarObj.name}</div>
          <img src={require(`../data/${tarObj.photoPath}`) } alt="画像が表示されます"/>
      </div>
  )
};
