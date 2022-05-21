import React from "react";

interface Props {
  name: string;
  text: string;
  mapPath: string;
}

export const FacilityItem = ({ name, text, mapPath }: Props): JSX.Element => {
  return (
    <div className="pt-12 md:flex">
      <div className="md:w-3/12 text-center md:text-left">
        <img src={mapPath} alt="施設の画像が入ります" />
      </div>
      <div className="md:w-9/12 px-8">
        <h2 className="text-2xl mb-4 text-center md:text-left">{name}</h2>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
};
