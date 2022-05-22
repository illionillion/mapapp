import React from "react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  text: string;
  mapPath: string;
  id: number;
}

export const FacilityItem = ({
  name,
  text,
  mapPath,
  id,
}: Props): JSX.Element => {
  const itemPath = `item/${id}`;
  return (
    <div className="pt-12 md:flex">
      <div className="md:w-3/12 text-center md:text-left bg-gray-300">
        <Link to={itemPath}>
          <img
            src={mapPath}
            alt="施設の画像が入ります"
            className="h-full w-full"
          />
        </Link>
      </div>
      <div className="md:w-9/12 px-8">
        <h2 className="text-2xl mb-4 text-center md:text-left">{name}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};
