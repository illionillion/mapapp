import React from "react";
import {ClickArea} from "../types/facilityItem"

interface Props {
  tarObj:ClickArea;
}
export const ImgChanger = ({ tarObj }: Props) => {

  return (
      <div className="h-80">
          <div>{tarObj.name}</div>
          <img className='w-full h-full'src={require(`../data/${tarObj.photoPath}`) } alt="画像が表示されます"/>
      </div>
  )
};
