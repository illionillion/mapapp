import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import type { Facility } from "../types/facilityItem";

type FacilityItemResponse = Facility & {
  id: string;
};

export const Test = (): JSX.Element => {
  const urlParams = useParams<{ id: string }>();
  useEffect(() => {
    console.log(urlParams);
  }, []);
  return <div>Test {urlParams.id}</div>;
};
